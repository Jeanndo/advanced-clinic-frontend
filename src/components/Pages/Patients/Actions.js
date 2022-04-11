import React from "react"
import { Select } from "antd"
import UpdateDepartment from "./UpdatePatient"
import DeleteDepartment from "./DeletePatient"

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
          <UpdateDepartment />
        </Option>
        <Option value="delete">
          <DeleteDepartment />
        </Option>
      </Select>
    </React.Fragment>
  )
}
export default Actions
