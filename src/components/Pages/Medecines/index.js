import React from "react"
import { Row, Col, Divider } from "antd"
import AddMedecine from "./MedecineDrawer"
import Search from "./Search"
import Medecines from "./MedecineTable"

const Medecine = () => {
  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <AddMedecine />
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
            <Medecines />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Medecine
