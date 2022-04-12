import React from "react"
import { Row, Col, Divider } from "antd"
import AddBill from "./BillDrawer"
import Search from "./Search"
import Bills from "./BillsTable"

const Bill = () => {
  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <AddBill />
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
            <Bills />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Bill
