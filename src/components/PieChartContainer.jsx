import React from 'react'
import { Chart } from "react-google-charts";

const pieChart = (props) =>  (
  <Chart
    width={"500px"}
    height={"300px"}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={props.data}
    options={{
      title: props.title
    }}
    rootProps={{ "data-testid": "1" }}
  />
);

export default pieChart;