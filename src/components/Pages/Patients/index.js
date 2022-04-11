import React from "react"
import { Row, Col, Divider } from "antd"
import AddPatient from "./PatientDrawer"
import Search from "./Search"
import Patients from "./PatientTable"

const Patient = () => {
  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <AddPatient />
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
            <Patients />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Patient
