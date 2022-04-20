import React from "react"
import { Row, Col, Divider, Typography, Badge, Avatar } from "antd"
import Search from "./Search"
import { BellOutlined } from "@ant-design/icons"
import classes from "./workspace.module.css"
import PatientList from "./Patients"
import Overview from "./PatientOverView"

const { Title } = Typography

const DoctorDashboard = () => {
  return (
    <React.Fragment>
      <Row>
        <Col
          span={8}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        >
          <div>
            <Title level={4}>Dr Emmmanuel</Title>
          </div>
        </Col>
        <Col
          span={8}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        >
          <div>
            <Search />
          </div>
        </Col>
        <Col
          span={8}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        >
          <div>
            <Badge
              count={99}
              overflowCount={10}
              className={classes.nottofications}
            >
              <Avatar icon={<BellOutlined />} size="large" />
            </Badge>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" />
      <Row>
        <Col
          span={4}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        >
          <div>
            <PatientList />
          </div>
        </Col>
        <Col
          span={20}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        >
          <div>
            <Overview />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default DoctorDashboard
