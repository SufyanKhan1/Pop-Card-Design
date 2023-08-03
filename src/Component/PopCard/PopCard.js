import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../Common/Button/Button";
import { SearchOutlined } from "../../Common/Index";
import { Col, Input, Radio, Row, Select, } from "../../Common/Index";
import { Projectcolumns, Projectdata } from "../../Data";
import { Wrapper } from "./PopCard.styled";
import { Table } from "../../Common/Table/Table";
const Project = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <div style={{ background: "whitesmoke", padding: "28px" }}>
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Row gutter={[20, 10]}>
              <Col
                style={{
                  display: "flex",
                  alignContent: "center",
                  flexDirection: "column",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "28px",
                      fontWeight: "600",
                      margin: "0",
                    }}
                  >
                    Popcards
                  </p>
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "400",
                    padding: "10px 0px",
                  }}
                >
                  <span>January 1-30,2023</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <div style={{ background: "#fff", padding: "20px" }}> */}
          <Col span={24} style={{ background: "#fff", padding: "20px" }}>
            <Row gutter={[10, 10]}>
              <Col span={14}>
                <Row gutter={[20, 10]}>
                  <Col
                    style={{
                      display: "flex",
                      alignContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          margin: "0",
                        }}
                      >
                        Best Performing
                      </p>
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "100",
                        padding: "10px 0px",
                      }}
                    >
                      <span>100 Users in the past 7 days</span>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={10}>
                <Row
                  gutter={[10, 10]}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  <Col>
                    <Button
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0",
                        fontSize: "14px",
                        width: "100px",
                        height: "38px",
                        color: "#000",
                        background: "none",
                        border: "1px solid #d9d9d9",
                      }}
                      filterIcon
                      title="Filters"
                      onClick={() => {
                        history.push(`/`);
                      }}
                    />
                  </Col>
                  <Col>
                    <Input
                      style={{ height: "39px" }}
                      placeholder="Search"
                      prefix={
                        <SearchOutlined
                          style={{ color: "#acacac", fontSize: "20px" }}
                        />
                      }
                    />
                  </Col>
                  <Col>
                    <Button
                      className="export-btn"
                      Icon
                      title="EXPORT"
                      onClick={() => {
                        history.push(`/`);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
              <Table
                // title={() => "SUMMARY REPORT"}
                columns={Projectcolumns}
                pagination={false}
                dataSource={Projectdata}
                bordered
              />
            </Col>
            </Row>
           
          </Col>
        </div>
      {/* </div> */}
    </Wrapper>
  );
};

export default Project;
