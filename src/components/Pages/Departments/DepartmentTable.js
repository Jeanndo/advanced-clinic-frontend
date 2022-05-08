import React from "react"
import { Table, Tag, Space } from "antd"
import Actions from "./Actions"

const columns = [
  {
    title: "DepartmentID",
    dataIndex: "DepartmentID",
    render: (text) => text,
  },
  {
    title: "DepartmentName",
    dataIndex: "DepartmentName",
  },
  {
    title: "DepartmentManager",
    dataIndex: "DepartmentManager",
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
    DepartmentID: "John Brown",
    DepartmentName: 32,
    DepartmentManager: "New York No. 1 Lake Park",
    Phone: "+250784860836",
    tags: ["inactive"],
  },
  {
    key: "2",
    DepartmentID: "Jim Green",
    DepartmentName: 42,
    DepartmentManager: "London No. 1 Lake Park",
    Phone: "+250784860836",
    tags: ["inactive"],
  },
  {
    key: "3",
    DepartmentID: "Joe Black",
    DepartmentName: 32,
    DepartmentManager: "Sidney No. 1 Lake Park",
    Phone: "+250784860836",
    tags: ["inactive"],
  },
  {
    key: "4",
    DepartmentID: "Disabled User",
    DepartmentName: 99,
    DepartmentManager: "Sidney No. 1 Lake Park",
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

const DepartmentTable = () => {
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

export default DepartmentTable
