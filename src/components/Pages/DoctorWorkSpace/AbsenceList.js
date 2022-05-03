import React from "react";
import { Table, Tag, Space } from "antd";
import Actions from "./AbsenceActions";

const columns = [
  {
    title: "From",
    dataIndex: "From",
    key: "From",
    render: (text) => text,
  },
  {
    title: "To",
    dataIndex: "To",
    key: "To",
  },
  {
    title: "ApprovedBy",
    dataIndex: "ApprovedBy",
    key: "approved",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length >= 8 ? "volcano" : "red";
          if (tag === "Ended") {
            color = "green";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Actions />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    From: "2022/04/3",
    To: "2022/04/3",
    ApprovedBy: "Dr. Emauel",
    tags: ["Approved"],
  },
  {
    key: "2",
    From: "2022/04/3",
    To: "2022/04/3",
    ApprovedBy: "Dr. Emauel",
    tags: ["Pending"],
  },
  {
    key: "3",
    From: "2022/04/3",
    To: "2022/04/3",
    ApprovedBy: "Dr. Emauel",
    tags: ["Ended"],
  },
];

const SupplierTable = () => {
  return (
    <React.Fragment>
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  );
};

export default SupplierTable;
