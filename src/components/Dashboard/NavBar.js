import React from "react"
import { Layout, Avatar, Image } from "antd"
const { Header } = Layout

const NavBar = () => {
  return (
    <Header style={{ backgroundColor: "#1890ff", padding: "10px" }}>
      <div className="User-profile">
        <Avatar
          style={{ float: "right" }}
          size="large"
          src={
            <Image
              src="https://avatars.githubusercontent.com/u/59208992?v=4"
              style={{ width: 32, borderRadius: "100px" }}
            />
          }
        />
      </div>
    </Header>
  )
}

export default NavBar
