import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

// More information about using Kendo component such as Grid and cell here, refer to:
// https://www.telerik.com/kendo-react-ui/components/grid/

// Cell that styles the linking cell
const LinkedCell = (props) => {
	let path = props.getPathName(props.dataItem);

	return (
		<td style={{ color: 'green' }}>
			<Link to={path}>{props.dataItem[props.field].toString()}</Link>
		</td>
	);
};

export default class GridContainer extends React.Component {
	state = {
		dataState: {
			sort: [
				{
					field: this.props.initSort,
					dir: 'asc'
				}
			]
		}
	};

	// Wrap the LinkedCell so that it could passed as prop in the render function
	linkingCell = (props) => <LinkedCell {...props} getPathName={this.props.getPathName} />;

	render() {
		return (
			<div>
				<Grid
					data={orderBy(this.props.data, this.state.dataState.sort)}
					onSortChange={(e) => {
						this.setState({
							dataState: {
								sort: e.sort
							}
						});
					}}
					sort={this.state.dataState.sort}
					sortable
				>
					{/* // Conditionally output columns based on if it is a column with links */}
					{this.props.headerInfo.map(
						(header) =>
							this.props.linkCol != null && this.props.linkCol === header['field'] ? (
								<Column
									key={header['field']}
									cell={this.linkingCell}
									field={header['field']}
									title={header['title']}
									sortable={header['sortable']}
								/>
							) : (
								<Column
									key={header['field']}
									field={header['field']}
									title={header['title']}
									sortable={header['sortable']}
								/>
							)
					)}
				</Grid>
			</div>
		);
	}
}

GridContainer.propTypes = {
	getPathName : PropTypes.func, 
	linkCol : PropTypes.string,
	initSort : PropTypes.string.isRequired,
	headerInfo : PropTypes.array.isRequired,
	data : PropTypes.array.isRequired
}