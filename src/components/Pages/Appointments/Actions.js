import React from "react"
import { Select } from "antd"
import UpdateAppointment from "./UpdateAppointment"
import DeleteAppointment from "./DeleteAppointment"

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
          <UpdateAppointment />
        </Option>
        <Option value="delete">
          <DeleteAppointment />
        </Option>
      </Select>
    </React.Fragment>
  )
}
export default Actions
