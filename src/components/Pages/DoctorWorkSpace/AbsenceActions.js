import React from "react"
import { Select } from "antd"
import UpdateLeave from "./EditLeave"
import DeleteLeave from "./DeleteLeave"

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
          <UpdateLeave />
        </Option>
        <Option value="delete">
          <DeleteLeave />
        </Option>
      </Select>
    </React.Fragment>
  )
}
export default Actions