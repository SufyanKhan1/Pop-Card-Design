import React from "react";
import { Area } from "@ant-design/plots";

const UserChart = () => {
  const data = [
    { year: "1991", value: 30 },
    { year: "1992", value: 40 },
    { year: "1993", value: 30 },
    { year: "1994", value: 50 },
    { year: "1995", value: 50 },
    { year: "1996", value: 60 },
    { year: "1997", value: 70 },
    { year: "1998", value: 90 },
    { year: "1999", value: 30 },
    { year: "2000", value: 70 },
    { year: "2001", value: 20 },
    { year: "2002", value: 80 },
    { year: "2003", value: 30 },
    { year: "2004", value: 20 },
    { year: "2005", value: 50 },
  ];
  const config = {
    smooth: true,
    data,
    xField: "year",
    yField: "value",
    xAxis: {
      range: [0, 1],
      tickCount: 40,
    },
    theme: {
      styleSheet: {
        backgroundColor: "#ffffff",
        brandColor: "#ff6f0f",
        paletteQualitative10: ["white"],
      },
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:rgb(255, 255, 255) 0.3:#ffffff 1: #ffffff",
      };
    },
  };

  return <Area style={{ padding: "20px" }} {...config} />;
};

export default UserChart;
