import React from "react"
import { Layout, Avatar, Image, Select, Row, Col, Button } from "antd"
import classes from "./dashboard.module.css"

const { Header } = Layout
const { Option } = Select

const NavBar = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <Header style={{ backgroundColor: "#1890ff" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div>&nbsp;</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>&nbsp;</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>&nbsp;</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={classes.User_profile}>
            <Avatar
              size="large"
              src={
                <Image
                  src="https://avatars.githubusercontent.com/u/59208992?v=4"
                  style={{ width: 32, borderRadius: "100px" }}
                />
              }
            />
            <Select
              style={{ width: 120 }}
              onChange={handleChange}
              defaultValue="Admin"
            >
              <Option value="Receptionist">Reception</Option>
              <Option value="Doctor">Doctor</Option>
              <Option value="admin">Admin</Option>
              <Option value="Nurse">Nurse</Option>
            </Select>
            <Button type="default" className={classes.logoutBtn}>
              Logout
            </Button>
          </div>
        </Col>
      </Row>
    </Header>
  )
}

export default NavBar
