import React from "react"
import { Select } from "antd"
import UpdateBill from "./UpdateBill"
import DeleteBill from "./DeleteBill"

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
          <UpdateBill />
        </Option>
        <Option value="delete">
          <DeleteBill />
        </Option>
      </Select>
    </React.Fragment>
  )
}
export default Actions
