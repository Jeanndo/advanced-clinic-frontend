import React from "react"
import { Row, Col, Divider } from "antd"
import AddAppointment from "./AppointmentDrawer"
import Search from "./Search"
import Appointments from "./AppointmentTable"

const Lab = () => {
  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <AddAppointment />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <Search />
          </div>
        </Col>
      </Row>
      <Divider orientation="left" />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div>
            <Appointments />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Lab
