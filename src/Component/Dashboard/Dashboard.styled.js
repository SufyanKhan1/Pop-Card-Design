import styled from "styled-components";

export const Wrapper = styled.div`
  .searchbtn {
    background: white;
    color: #000;
  }
  .main-container {
    background: whitesmoke;
    padding: 28px;
    .container-section {
      /* display: flex;
      justify-content: space-between; */
      .dashboard-col {
        display: flex;
        align-content: center;
        flex-direction: column;
        .heading {
          p {
            font-size: 26px;
            font-weight: 600;
            margin: 0;
          }
        }
        .sub-heading {
          font-size: 18px;
          font-weight: 400;
          padding: 10px 0px;
        }
      }
      .container-second-col {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        padding: 10px 0px;
      }
    }
    .activity-section {
      .activity-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        .activity-col {
          display: flex;
          align-content: center;
          flex-direction: column;
          p {
            font-size: 22px;
            font-weight: 300;
            margin: 0;
            padding: 10px 0px;
          }
        }
      }
      .statistic-col {
        background: #fff;
        .container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          align-content: center;
        }
      }
    }
    .ant-table-thead > tr > th {
      background-color: #fff; /* Replace this with your desired background color */
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
  }
`;
