import React from "react"
import { Select } from "antd"
import UpdateDoctor from "./UpdateDoctor"
import DeleteDoctor from "./DeleteDoctor"

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
          <UpdateDoctor />
        </Option>
        <Option value="delete">
          <DeleteDoctor />
        </Option>
      </Select>
    </React.Fragment>
  )
}
export default Actions
