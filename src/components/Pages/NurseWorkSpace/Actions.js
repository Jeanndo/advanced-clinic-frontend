import React from "react"
import { Select } from "antd"
import AddTest from "./AddTest"
import AssignPatients from "./AssignPatient"

const { Option } = Select

function handleChange(value) {
  console.log(value) // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}
const Actions = () => {
  return (
    <React.Fragment>
      <Select
        labelInValue
        defaultValue={{ value: "Action" }}
        style={{ width: 150 }}
        onChange={handleChange}
      >
        <Option value="edit">
          <AddTest />
        </Option>
        <Option value="delete">
          <AssignPatients />
        </Option>
      </Select>
    </React.Fragment>
  )
}
export default Actions
