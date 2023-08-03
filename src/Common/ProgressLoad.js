import { Progress } from "antd";

const ProgressLoad = ({ item, value, status, strokeColor }) => {
  return (
    <>
      <div
        className="progress"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
          padding: "30px 15px",
        }}
      >
        <Progress
          strokeLinecap="butt"
          type="circle"
          strokeColor={strokeColor}
          status={status}
          format={(percent) => `${percent} `}
          percent={value}
        />
        <span style={{ paddingLeft: "10px" }}> {item}</span>
      </div>
    </>
  );
};

export default ProgressLoad;

  {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: "60px",
              }}
            >
              <div
                className="progress"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "30px 0px",
                }}
              >
                <Progress
                  strokeLinecap="butt"
                  type="circle"
                  status="exception"
                  format={(percent) => `${percent} `}
                  percent={12}
                />
                <span style={{ paddingLeft: "10px" }}> Overdue</span>
              </div>
              <div
                className="progress"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "30px 0px",
                }}
              >
                <Progress
                  strokeLinecap="butt"
                  type="circle"
                  strokeColor="#FAB400"
                  format={(percent) => `${percent} `}
                  percent={5}
                />
                <span style={{ paddingLeft: "10px" }}> Pending</span>
              </div>
              <div
                className="progress"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "30px 0px",
                }}
              >
                <Progress
                  strokeLinecap="butt"
                  type="circle"
                  strokeColor="#15A408"
                  format={(percent) => `${percent} `}
                  percent={3}
                />
                <span style={{ paddingLeft: "10px" }}> Confirmed</span>
              </div>
            </div> */}