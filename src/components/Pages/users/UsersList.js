import React from "react"
import { Row, Col, Divider, Typography, Input } from "antd"
import Users from "./UsersTable"
import AddUser from "./AddUserDrawer"

const { Title } = Typography

const { Search } = Input

const UsersList = () => {
  const [searchTerm, setSearchTerm] = React.useState("")

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <AddUser />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <form onSubmit={onSubmit}>
              <Search
                placeholder="Search Here"
                enterButton="Search"
                size="large"
                loading={false}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </form>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div>
            <Title level={5} style={{ color: "#1890ff" }}>
              USERS
            </Title>
            <Users />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default UsersList
