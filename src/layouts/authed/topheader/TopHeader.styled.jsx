import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 100%;
  .trigger {
    display: flex;
    align-items: center;
    font-size: 28px;
    line-height: 64px;
    color: #000000;
    cursor: pointer;
    transition: color 0.3s;
    :hover {
      color: #3d4e83;
    }
  }

 
`;
