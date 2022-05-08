import React from "react"
import { Row, Col, Divider } from "antd"
import AddInsurance from "./InsuranceDrawer"
import Search from "./Search"
import Insurances from "./InsuranceTable"

const Insurance = () => {
  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <AddInsurance />
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
            <Insurances />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Insurance
