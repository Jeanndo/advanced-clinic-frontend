import React from "react"
import { Row, Col, Divider } from "antd"
import AddSupplier from "./SupplierDrawer"
import Search from "./Search"
import Suppliers from "./SupplierTable"

const Supplier = () => {
  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <AddSupplier />
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
            <Suppliers />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Supplier
