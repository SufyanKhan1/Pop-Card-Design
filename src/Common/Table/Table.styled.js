import styled from "styled-components";
import { Table } from "antd";

export const Wrapper = styled(Table)`
  height: auto;
  .ant-table table {
    text-align: center;
  }

  .ant-table-tbody > tr > td {
    font-size: 14px;
  }
  .ant-table-thead > tr > th {
    border-bottom: none;
  }
  .ant-table {
    border: none;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; */
    font-size: 16px;
    overflow: auto;
  }

  @media (max-width: 886px) {
    .ant-table-thead {
      width: 100%;
    }
    overflow-x: scroll;
  }
  :where(.css-dev-only-do-not-override-1me4733).ant-table-wrapper
    .ant-table-container
    table
    > thead
    > tr:first-child
    > *:first-child {
    border-start-start-radius: 0px !important;
  }
  :where(.css-dev-only-do-not-override-1me4733).ant-table-wrapper
    .ant-table-container
    table
    > thead
    > tr:first-child
    > *:last-child {
    border-end-end-radius: 0px !important;
  }
  :where(.css-dev-only-do-not-override-1me4733).ant-table-wrapper
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before,
  :where(.css-dev-only-do-not-override-1me4733).ant-table-wrapper
    .ant-table-thead
    > tr
    > td:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before {
    display: none;
  }
`;
