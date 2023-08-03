import styled from "styled-components";

export const Wrapper = styled.div`
  .addIcon {
    a {
      svg {
        fill: #fff;
      }
    }
  }
  .searchbtn {
    width: 93px;
    height: 41px;
    padding: 0px;
    border-radius: 4px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
  .export-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 14px;
    width: 100px;
    height: 38px;
    background: #fbbf24;
    :hover {
      border: 1px solid #fff !important;
      color: #fff !important;
    }
  }
`;
