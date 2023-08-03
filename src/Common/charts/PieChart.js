import { Pie } from "@ant-design/charts";
import React from "react";
import styled from "styled-components";

const PieChart = () => {
  const Wrapper = styled.div`
 
  `;

  const pieChartData = [
    {
      type: "Target 1",
      value: 40,
    },
    {
      type: "Target 2",
      value: 25,
    },
    {
      type: "Target 3",
      value: 22,
    },
    {
      type: "Target 4",
      value: 22,
    },
  ];

  const config = {
    appendPadding: 0,
    data: pieChartData,
    angleField: "value",
    colorField: "type",
    paddingAngle: 210,
    radius: 1,
    innerRadius: 0.5,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          fontSize: 14,
          textOverflow: "ellipsis",
        },
        formatter: function formatter() {
          return `total\n134`;
        },
      },
    },
  };

  return (
    <Wrapper>
      <Pie {...config} />
    </Wrapper>
  );
};

export default PieChart;
