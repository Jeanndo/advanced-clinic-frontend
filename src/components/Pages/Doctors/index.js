import React from "react"
import { Row, Col, Divider } from "antd"
import AddDoctor from "./DoctorDrawer"
import Search from "./Search"
import Doctors from "./DoctorTable"

const Doctor = () => {
  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <AddDoctor />
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
            <Doctors />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Doctor
