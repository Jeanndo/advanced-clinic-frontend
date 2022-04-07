import React from "react"
import { Table, Tag, Space } from "antd"
import classes from "./style.module.css"

const columns = [
  {
    title: "Date",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href=".">{text}</a>,
  },
  {
    title: "Reference_code",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Doctor_ID",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Doctor_Name",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "Doctor_status",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length >= 10 ? "volcano" : "green"
          if (tag === "Not on Shift") {
            color = "volcano"
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: "Total Patients",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Schecule",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <button className={classes.scheduleButton}>Sechedule</button>
      </Space>
    ),
  },
]

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["Not on Shift"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["Not on Shift"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["On Shift"],
  },
]

const DoctorsTable = () => {
  return (
    <React.Fragment>
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  )
}

export default DoctorsTable
