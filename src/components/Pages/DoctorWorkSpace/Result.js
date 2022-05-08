import React from "react"
import { Divider, Row, Col } from "antd"
import classes from "./workspace.module.css"

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.resultContainer}>
      <h2 className={classes.resultTitle}>Monaco Mai Jenkins 25 years old</h2>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 2 }}>
        <Col className="gutter-row" span={12}>
          <div className={classes.resultImage__container}>
            <img
              src="https://cdn.pixabay.com/photo/2016/06/24/03/53/diagnosis-1476620_1280.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={classes.resultImage__container}>
            <img
              src="https://cdn.pixabay.com/photo/2016/06/24/03/53/diagnosis-1476620_1280.jpg"
              alt=""
            />
          </div>
        </Col>
      </Row>
      <Divider orientation="left" />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>Heamoglobin: 7 </div>
          <div>Red Blood Cells Count: 23 </div>
          <div>MVH White Blood Cells count: 23</div>
          <div>MVH Heamoglobin: 7</div>
          <div>Red Blood Cells Count: 23</div>
          <div> MVH White Blood Cells count: 23</div>
          <div> MVH Covid-19: Positive</div>
        </Col>
      </Row>
    </div>
  )
})
