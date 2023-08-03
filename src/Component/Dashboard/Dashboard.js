import React from "react";

import { Wrapper } from "./Dashboard.styled";
import { Projectcolumns, Projectdata } from "../../Data";
import { Col, Row, Statistic, DatePicker, Input } from "antd";
import UserChart from "../../Common/charts/UserChart";
import PieChart from "../../Common/charts/PieChart";
import { ArrowUpOutlined, SearchOutlined } from "@ant-design/icons";
import { Button } from "../../Common/Button/Button";
import { useHistory } from "react-router";
import { Table } from "../../Common/Table/Table";
const Dashboard = () => {
  const history = useHistory();
  const { RangePicker } = DatePicker;
  return (
    <Wrapper>
      <div className="main-container">
        <Row gutter={[10, 10]} className="container-section">
          <Col lg={8} md={24} className="dashboard-col">
            <div className="heading">
              <p>Dashboard</p>
            </div>
            <div className="sub-heading">
              <span>January 1-30,2023</span>
            </div>
          </Col>

          <Col lg={16} md={24} sm={24} xs={24} className="container-second-col">
            <Row gutter={[10, 10]}>
              <Col lg={4} md={4} sm={12} xs={24}>
                <Button className="searchbtn" type="primary" title="7 Days" />
              </Col>
              <Col lg={4} md={4} sm={12} xs={24}>
                <Button className="searchbtn" type="primary" title="1 Month" />
              </Col>
              <Col lg={4} md={4} sm={12} xs={24}>
                <Button className="searchbtn" type="primary" title="3 Months" />
              </Col>
              <Col lg={4} md={4} sm={12} xs={24}>
                <Button className="searchbtn" type="primary" title="1 Year" />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <RangePicker style={{ height: "44px", width: "100%" }} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[20, 20]} className="activity-section">
          <>
            <Col lg={18} md={24} sm={24} xs={24}>
              <Col span={24} style={{ background: "white" }}>
                <div className="activity-header">
                  <Col className="activity-col">
                    <Col>
                      <p>Activity</p>
                    </Col>
                    <Col>
                      <span style={{ fontSize: "24px", fontWeight: "600" }}>
                        Online Scans
                      </span>
                    </Col>
                  </Col>
                  <Col style={{ display: "flex" }}>
                    <span style={{ fontSize: "24px", fontWeight: "400" }}>
                      635
                    </span>
                    <Statistic
                      value={11.28}
                      precision={2}
                      valueStyle={{
                        color: "#3f8600",
                      }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Col>
                </div>
                <UserChart />
              </Col>
            </Col>
            <Col className="statistic-col" lg={6} md={24} sm={24} xs={24}>
              <div className="container">
                <Col
                  style={{
                    display: "flex",
                    alignContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Col>
                    <p
                      style={{
                        fontSize: "22px",
                        fontWeight: "300",
                        margin: "0",
                        padding: "10px 0px",
                      }}
                    >
                      Statistic
                    </p>
                  </Col>
                  <Col>
                    <span style={{ fontSize: "24px", fontWeight: "600" }}>
                      Scans Per Target
                    </span>
                  </Col>
                </Col>
              </div>
              <PieChart />
            </Col>
            {/* <Col span={24}>
              <Table
                // title={() => "SUMMARY REPORT"}
                columns={Projectcolumns}
                pagination={false}
                dataSource={Projectdata}
                bordered
              />
            </Col> */}

            <Col span={24}>
              <Table
                title={() => (
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
                  </Row>
                )}
                columns={Projectcolumns}
                pagination={false}
                dataSource={Projectdata}
                bordered
              />
            </Col>
          </>
        </Row>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
