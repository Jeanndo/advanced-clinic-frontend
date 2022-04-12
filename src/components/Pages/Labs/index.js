import React from "react"
import { Row, Col, Divider } from "antd"
import AddLab from "./LabDrawer"
import Search from "./Search"
import Labs from "./LabTable"

const Lab = () => {
  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <AddLab />
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
            <Labs />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Lab
