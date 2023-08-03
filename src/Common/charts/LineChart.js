import React from "react";
import { Line } from "@ant-design/charts";

const LineChart = ({ width, height }) => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  const config = {
    data,
    width: 100,
    height: 100,
    autoFit: false,
    xField: "year",
    yField: "value",
    point: {
      size: 1,
      shape: "diamond",
    },
    // label on line text uncomment following code if you need label

    // label: {
    //   style: {
    //     fill: "#aaa",
    //   },
    // },

    // Hide tooltip
    xAxis: false, // Hide x-axis
    yAxis: false, // Hide y-axis
    lineStyle: {
      stroke: "red", // Set the color of the line here (e.g., "red", "#FF0000", etc.)
      lineWidth: 2,
    },
  };

  return <Line {...config} />;
};

export default LineChart;
