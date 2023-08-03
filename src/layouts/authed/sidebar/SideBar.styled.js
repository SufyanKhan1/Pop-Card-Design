import styled from "styled-components";

export const Wrapper = styled.div`
  /* background: #ffffff; */
  .logo {
    text-align: center;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .ant-menu-item {
    :hover {
      color: #000 !important;
    }
    span {
      overflow: visible !important;
    }
  }
`;
