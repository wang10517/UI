import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { orderBy } from "@progress/kendo-data-query";
import { Link } from "react-router-dom";

const LinkedCell = props => {
  let path = props.getPathName(props.dataItem);

  return (
    <div>
      <td style={{color : "green"}}>
        <Link to={path}>{props.dataItem[props.field].toString()}</Link>
      </td>
    </div>
  );
};

export default class GridContainer extends React.Component {
  state = {
    dataState: {
      sort: [
        {
          field: this.props.initSort,
          dir: "asc"
        }
      ]
    }
  };

  linkingCell = props => (
    <LinkedCell {...props} getPathName={this.props.getPathName} />
  );

  render() {
    return (
      <div>
        <Grid
          // style={{ height: '300px', }}
          data={orderBy(this.props.data, this.state.dataState.sort)}
          onSortChange={e => {
            this.setState({
              dataState: {
                sort: e.sort
              }
            });
          }}
          sort={this.state.dataState.sort}
          sortable
        >
          {this.props.headerInfo.map(header =>
            this.props.linkCol != null &&
            this.props.linkCol === header["field"] ? (
              <Column
                key={header["field"]}
                cell={this.linkingCell}
                field={header["field"]}
                title={header["title"]}
                sortable={header["sortable"]}
              />
            ) : (
              <Column
                key={header["field"]}
                field={header["field"]}
                title={header["title"]}
                sortable={header["sortable"]}
              />
            )
          )}
        </Grid>
      </div>
    );
  }
}
