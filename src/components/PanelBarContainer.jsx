import React from "react";
import "./PanelContainer.css";
// import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import Drawer from "@material-ui/core/Drawer";

const panel1 = (
  <div class="panelbar-wrapper">
    <PanelBar>
      <PanelBarItem expanded={true} title="Domain Summary">
        <div>
          <div className="Tab">
            {this.props.chart}
            <span className="mate-info">
              <h2>{this.props.domainName}</h2>
              <p>{this.props.domainID}</p>
            </span>
          </div>
        </div>
      </PanelBarItem>
      <PanelBarItem title={"Manage Selectors"}>
        <PanelBarItem title={"Match Existing Selectors"} />
        <PanelBarItem title={"Generate New Selectors"} />
      </PanelBarItem>
    </PanelBar>
  </div>
);

class PanelContainer extends React.Component {
  render() {
      // <Drawer anchor=left></Drawer>
  }
}

export default PanelContainer;
