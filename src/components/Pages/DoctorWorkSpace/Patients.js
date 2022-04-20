import React from "react"
// import classes from "./workspace.module.css"
import { Menu } from "antd"
import { UserOutlined } from "@ant-design/icons"

const Patients = () => {
  return (
    <React.Fragment>
      <div>
        <Menu
          style={{ width: 200 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Patient Name
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Patient Name
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Patient Name
          </Menu.Item>
        </Menu>
      </div>
    </React.Fragment>
  )
}

export default Patients
