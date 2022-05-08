import React from "react"
import { Select } from "antd"
import UpdateSupplier from "./UpdateSupplier"
import DeleteSupplier from "./DeleteSupplier"

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
          <UpdateSupplier />
        </Option>
        <Option value="delete">
          <DeleteSupplier />
        </Option>
      </Select>
    </React.Fragment>
  )
}
export default Actions
