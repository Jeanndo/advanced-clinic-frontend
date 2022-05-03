import React from "react"
import { Table,Space } from "antd"
import Actions from "./Actions"

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => text,
  },
  {
    title: "Full Name",
    dataIndex: "FullName",
    key: "age",
  },
  {
    title: "Date of Birth",
    dataIndex: "dob",
    key: "dob",
  },
  {
    title: "Province",
    dataIndex: "Province",
    key: "privince",
  },
  {
    title: "Sector",
    dataIndex: "Sector",
    key: "Sector",
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
    date: "2022/20/03",
    FullName:"Jado",
    dob: "2022/20/03",
    Province:"Nyarugenge",
    Sector:"Nyarugenge",
  },
  {
    key: "2",
    date: "2022/20/03",
    FullName:"Jado",
    dob: "2022/20/03",
    Province:"Nyarugenge",
    Sector:"Nyarugenge",
  },
  {
    key: "3",
    date: "2022/20/03",
    FullName:"Jado",
    dob: "2022/20/03",
    Province:"Nyarugenge",
    Sector:"Nyarugenge",
    
  },
  
]

const PatientsTable = () => {
  return (
    <React.Fragment>
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  )
}

export default PatientsTable
