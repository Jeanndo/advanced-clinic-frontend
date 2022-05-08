import React from "react"
import { Select } from "antd"
import UpdateInsurance from "./UpdateInsurance"
import DeleteInsurance from "./DeleteInsurance"

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
          <UpdateInsurance />
        </Option>
        <Option value="delete">
          <DeleteInsurance />
        </Option>
      </Select>
    </React.Fragment>
  )
}
export default Actions
