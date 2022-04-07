import React from "react"
import { Select } from "antd"
import UpdateUser from "./UpdateUser"
import DeleteUser from "./DeleteUser"

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
          <UpdateUser />
        </Option>
        <Option value="delete">
          <DeleteUser />
        </Option>
      </Select>
    </React.Fragment>
  )
}
export default Actions
