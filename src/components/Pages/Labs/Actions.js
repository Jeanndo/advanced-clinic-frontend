import React from "react"
import { Select } from "antd"
import UpdateLab from "./UpdateLab"
import DeleteMedecine from "./DeleteLab"

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
          <UpdateLab />
        </Option>
        <Option value="delete">
          <DeleteMedecine />
        </Option>
      </Select>
    </React.Fragment>
  )
}
export default Actions
