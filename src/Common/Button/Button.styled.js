import styled from "styled-components";
import { Button } from "antd";

export const Wrapper = styled(Button)`
  /* background: #3a96b8; */
  background: #038fde;
  font-size: 16px;
  color: white;
  border: 0 none;
  border-radius: 3px;
  cursor: pointer;
  border: 2px solid transparent;
  width: 100%;
  padding-bottom: 35px;
  border-radius: 5px;
  /* padding-top: 12px; */
  :hover {
    border: 2px solid white;
    background: #3a96b8;
    color: white;
  }
  .addIcon {
    margin-right: 10px;
  }
  .minusIcon {
    margin-right: 10px;
  }
  .ant-spin {
    color: white;
    margin-right: 10px;
  }
`;
