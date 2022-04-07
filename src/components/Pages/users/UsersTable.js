// @ts-nocheck
import React from "react"
import { Table, Tag, Space } from "antd"
import Actions from "./Actions"

const columns = [
  {
    title: "Full Name",
    dataIndex: "FullName",
    render: (text) => text,
  },
  {
    title: "WorkID",
    dataIndex: "WorkID",
  },
  {
    title: "Role",
    dataIndex: "Role",
  },
  {
    title: "Phone",
    dataIndex: "Phone",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags?.map((tag) => {
          let color = tag.length >= 8 ? "volcano" : "green"
          if (tag === "active") {
            color = "green"
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
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Actions />
      </Space>
    ),
  },
]
const data = [
  {
    key: "1",
    FullName: "John Brown",
    WorkID: 32,
    Role: "New York No. 1 Lake Park",
    Phone: "+250784860836",
    tags: ["inactive"],
  },
  {
    key: "2",
    FullName: "Jim Green",
    WorkID: 42,
    Role: "London No. 1 Lake Park",
    Phone: "+250784860836",
    tags: ["inactive"],
  },
  {
    key: "3",
    FullName: "Joe Black",
    WorkID: 32,
    Role: "Sidney No. 1 Lake Park",
    Phone: "+250784860836",
    tags: ["inactive"],
  },
  {
    key: "4",
    FullName: "Disabled User",
    WorkID: 99,
    Role: "Sidney No. 1 Lake Park",
    Phone: "+250784860836",
    tags: ["active"],
  },
] // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    )
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
}

const UsersTable = () => {
  return (
    <div>
      <div>
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  )
}

export default UsersTable
