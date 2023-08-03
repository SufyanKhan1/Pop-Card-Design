import { CheckCircleOutlined, RoundIcon } from "./Common/Index";
import { Checkbox, Tag } from "antd";
import React from "react";
import Dashboard from "./Component/Dashboard/Dashboard";

import { WarningOutlined } from "@ant-design/icons";
import AccountRound from "./assets/images/logo.png";
import LineChart from "./Common/charts/LineChart";

export const columns = [
  {
    title: "Customer",
    dataIndex: "name",
    key: "name",
    align: "center",
    backgroundColor: "#000",
  },
  {
    title: "Active Locations",
    dataIndex: "age",
    key: "age",
    align: "center",
    color: "#000",
  },
  {
    title: "At Risk",
    dataIndex: "address",
    key: "address",
    align: "center",
  },
];
export const data = [
  {
    key: "1",
    name: "Brooklyn Simmons",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "2",
    name: "Jerome Bell",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "3",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "4",
    name: "Bessie Cooper",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "5",
    name: "Kathryn Murphy",
    age: "(04)",
    address: "(04)",
  },
];
export const items = [
  {
    key: "1",
    label: "   1st menu item",
  },
  {
    key: "2",
    label: "2nd menu item",
  },
  {
    key: "3",
    label: "   3rd menu item",
  },
];

export const vendorColumns = [
  {
    title: "Vendor",
    dataIndex: "name",
    key: "name",
    align: "center",
    backgroundColor: "#000",
  },
  {
    title: "Events",
    dataIndex: "age",
    key: "age",
    align: "center",
    color: "#000",
  },
  {
    title: "Overdue",
    dataIndex: "address",
    key: "address",
    align: "center",
  },
];
export const vendorData = [
  {
    key: "1",
    name: "Brooklyn Simmons",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "2",
    name: "Jerome Bell",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "3",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "4",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "5",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "6",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "7",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "8",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
];

export const messageColumns = [
  {
    title: "MESSAGES",
    dataIndex: "name",
    key: "name",
    align: "start",
    backgroundColor: "#000",
  },
];
export const messageData = [
  {
    key: "1",
    name: "Brooklyn Simmons",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "2",
    name: "Jerome Bell",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "3",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "4",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "5",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
  {
    key: "6",
    name: "Devon Lane",
    age: "(04)",
    address: "(04)",
  },
];

export const eventsColumns = [
  {
    title: "Customer",
    dataIndex: "Customer",
    key: "Customer",
    align: "center",
    backgroundColor: "#000",
  },
  {
    title: "Location",
    dataIndex: "Location",
    key: "Location",
    align: "center",
    color: "#000",
  },
  {
    title: "Key Location",
    dataIndex: "keyLocation",
    key: "keyLocation",
    align: "center",
  },
  {
    title: "Project Name",
    dataIndex: "projectName",
    key: "projectName",
    align: "center",
    color: "#000",
  },
  {
    title: "Event ID",

    dataIndex: "eventID",
    key: "eventID",
    align: "center",
    color: "#000",
  },
  {
    title: "Event Type",
    dataIndex: "eventType",
    key: "eventType",
    align: "center",
    color: "#000",
  },
  {
    title: "Permits",
    dataIndex: "Permits",
    key: "Permits",
    align: "center",
    color: "#000",
  },
  {
    title: "Installs",
    dataIndex: "Installs",
    key: "Installs",
    align: "center",
    color: "#000",
    render: (_, { Installs }) => (
      <>
        {Installs == "Overdue" ? (
          <Tag className="tagcolor" key={Installs}>
            <WarningOutlined style={{ padding: "5px" }} />

            {Installs}
          </Tag>
        ) : (
          <Tag className="tagpending" key={Installs}>
            <RoundIcon
              style={{ paddingTop: "7px", width: "16px", height: "16px" }}
            />

            {Installs}
          </Tag>
        )}
      </>
    ),
  },
  {
    title: "Inspections",
    dataIndex: "Inspections",
    key: "Inspections",
    align: "center",
    color: "#000",
  },
  {
    title: "Takedowns",
    dataIndex: "Takedowns",
    key: "Takedowns",
    align: "center",
    color: "#000",
  },
  {
    title: "Deadline",
    dataIndex: "Deadline",
    key: "Deadline",
    align: "center",
    color: "#000",
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "Action",
    align: "center",
    color: "#000",
  },
];
export const eventsData = [
  {
    key: "1",
    Customer: "Brooklyn Simmons",
    designation: "sales",
    Location: "(04)",
    keyLocation: "(04)",
    projectName: "p",
    eventID: "fk",
    eventType: "tt",
    Permits: "Permits",
    Installs: "Pending",
    Inspections: "Inspections",
    Takedowns: "Takedowns",
    Deadline: "Deadline",
    Action: <Checkbox />,
  },
  {
    key: "2",
    Customer: "Brooklyn Simmons",
    Location: "(04)",
    designation: "sales",
    keyLocation: "(04)",
    projectName: "p",
    eventID: "fk",
    eventType: "tt",
    Permits: "Permits",
    Installs: "Pending",
    Inspections: "Inspections",
    Takedowns: "Takedowns",
    Deadline: "Deadline",
    Action: <Checkbox />,
  },
  {
    key: "3",
    Customer: "Brooklyn Simmons",
    Location: "(04)",
    keyLocation: "(04)",
    projectName: "p",
    eventID: "fk",
    eventType: "tt",
    Permits: "Permits",
    Installs: "Overdue",
    Inspections: "Inspections",
    Takedowns: "Takedowns",
    Deadline: "Deadline",
    Action: <Checkbox />,
  },
  {
    key: "4",
    Customer: "Brooklyn Simmons",
    Location: "(04)",
    keyLocation: "(04)",
    projectName: "p",
    eventID: "fk",
    eventType: "tt",
    Permits: "Permits",
    Installs: "Pending",
    Inspections: "Inspections",
    Takedowns: "Takedowns",
    Deadline: "Deadline",
    Action: <Checkbox />,
  },
  {
    key: "5",
    Customer: "Brooklyn Simmons",
    Location: "(04)",
    keyLocation: "(04)",
    projectName: "p",
    eventID: "fk",
    eventType: "tt",
    Permits: "Permits",
    Installs: "Pending",
    Inspections: "Inspections",
    Takedowns: "Takedowns",
    Deadline: "Deadline",
    Action: <Checkbox />,
  },
  {
    key: "5",
    Customer: "Brooklyn Simmons",
    Location: "(04)",
    keyLocation: "(04)",
    projectName: "p",
    eventID: "fk",
    eventType: "tt",
    Permits: "Permits",
    Installs: "Pending",
    Inspections: "Inspections",
    Takedowns: "Takedowns",
    Deadline: "Deadline",
    Action: <Checkbox />,
  },
  {
    key: "5",
    Customer: "Brooklyn Simmons",
    Location: "(04)",
    keyLocation: "(04)",
    projectName: "p",
    eventID: "fk",
    eventType: "tt",
    Permits: "Permits",
    Installs: "Pending",
    Inspections: "Inspections",
    Takedowns: "Takedowns",
    Deadline: "Deadline",
    Action: <Checkbox />,
  },
  {
    key: "5",
    Customer: "Brooklyn Simmons",
    Location: "(04)",
    keyLocation: "(04)",
    projectName: "p",
    eventID: "fk",
    eventType: "tt",
    Permits: "Permits",
    Installs: "Pending",
    Inspections: "Inspections",
    Takedowns: "Takedowns",
    Deadline: "Deadline",
    Action: <Checkbox />,
  },
];
export const Projectcolumns = [
  {
    title: "User",
    dataIndex: "name",
    key: "key",
    align: "center",
    width: 100,
    align: "start",
    render: (text, record) => {
      console.log(record, "record");
      return (
        <div style={{ display: "flex" }}>
          <div>
            <img width={50} height={50} src={AccountRound} alt="img" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <span>{text}</span>
            <span>{record?.designation}</span>
          </div>
        </div>
      );
    },
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Target",
    dataIndex: "number",
    key: "number",
    align: "center", width:50,
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status", width:50,
    align: "center",
    render: (_, { Status }) => (
      <>
        {Status.map((item) => {
          console.log( Status, "itemsssss");
          return (
            <Tag color={"rgb(21, 164, 8,0.6)"} key={item}>
              <CheckCircleOutlined style={{ padding: "5px" }} />
              {item}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Last Scanned",
    dataIndex: "lastScanned",
    key: "Customer",
    align: "center", width:50,
  },
  {
    title: "Scanned Per Hour",
    dataIndex: "scannedPerHour",
    key: "Events",
    align: "center", width:50,
  },
  {
    title: "Last 7 Days",
    dataIndex: "Startdate",
    key: "Start Date",
    align: "center",
    width:50,
    render: () => {
      return <LineChart />;
    },
  },
];

export const Projectdata = [
  {
    key: "1",
    name: "Brooklyn Simmons",
    designation: "sales",
    lastScanned: "3 minutes ago",
    scannedPerHour: "50",
    number: "04",
    Status: ["Active"],
    Startdate: "2023",
    Enddate: "2022",
    Events: "Today",
  },
  {
    key: "1",
    name: "Brooklyn Simmons",
    designation: "sales",
    lastScanned: "3 minutes ago",
    scannedPerHour: "50",
    number: "04",
    Status: ["Active"],
    Startdate: "2023",
    Enddate: "2022",
    Events: "Today",
    data: [5, 10, 15, 3, 7, 2],
  },
  {
    key: "2",
    name: "Brooklyn Simmons",
    designation: "sales",
    lastScanned: "3 minutes ago",
    scannedPerHour: "50",
    number: "04",
    Status: ["Active"],
    Startdate: "2023",
    Enddate: "2022",
    Events: "Today",
    data: [5, 10, 15, 3, 7, 2],
  },
  {
    key: "3",
    name: "Brooklyn Simmons",
    designation: "sales",
    lastScanned: "3 minutes ago",
    scannedPerHour: "50",
    number: "04",
    Status: ["Active"],
    Startdate: "2023",
    Enddate: "2022",
    Events: "Today",
    data: [5, 10, 15, 3, 7, 2],
  },
  {
    key: "4",
    name: "Brooklyn Simmons",
    designation: "sales",
    lastScanned: "3 minutes ago",
    scannedPerHour: "50",
    number: "04",
    Status: ["Active"],
    Startdate: "2023",
    Enddate: "2022",
    Events: "Today",
    data: [5, 10, 15, 3, 7, 2],
  },
  {
    key: "5",
    name: "Brooklyn Simmons",
    designation: "sales",
    lastScanned: "3 minutes ago",
    scannedPerHour: "50",
    number: "04",
    Status: ["Active"],
    Startdate: "2023",
    Enddate: "2022",
    data: [5, 10, 15, 3, 7, 2],
    Events: "Today",
  },
];
const Data = () => {
  <Dashboard columns={columns} data={data} items={items} />;
  return <></>;
};

export default Data;
