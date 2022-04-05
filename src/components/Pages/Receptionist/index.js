import React from "react"
import { Row, Col, Divider, Input, Badge, Avatar } from "antd"
import { UserOutlined, BellOutlined } from "@ant-design/icons"
import AddPatient from "./AddPatient"
import Patients from "./PatientsWithDoctors"
import PatientsList from "./PatientsList"
import classes from "./style.module.css"

const { Search } = Input
const Receptionist = () => {
  const [searchTerm, setSearchTerm] = React.useState("")

  const onSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div>
            <AddPatient />
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
        <Col className="gutter-row" span={6}>
          <div>
            <span className={classes.userAvatar}>
              <Badge count={12} overflowCount={5}>
                <Avatar
                  style={{ backgroundColor: "black" }}
                  icon={<UserOutlined />}
                />
              </Badge>
            </span>
            <span>
              <Badge count={12} overflowCount={5}>
                <Avatar
                  style={{ backgroundColor: "white", color: "black" }}
                  icon={<BellOutlined />}
                />
              </Badge>
            </span>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div>
            <Patients />
          </div>
        </Col>
      </Row>
      <Divider orientation="left" />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div>
            <PatientsList />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Receptionist
