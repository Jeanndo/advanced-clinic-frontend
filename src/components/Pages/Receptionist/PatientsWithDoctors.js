import React from "react"
import { Row, Col } from "antd"
import classes from "./style.module.css"
import { Icon } from "@iconify/react"

const PatientsWithDoctors = () => {
  return (
    <React.Fragment>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className={classes.card_row}
      >
        <Col className="gutter-row" span={6}>
          <div className={classes.card__container}>
            <div>
              <span>
                <Icon icon="healthicons:doctor" color="#16a34a" width={50} />
              </span>
            </div>
            <div>
              <span>Dr. Aimable Ishimwe (PD)</span>
            </div>
            <div>
              <span className={classes.patients__number}>20</span>
            </div>
            <div>
              <span>Patients</span>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={classes.card__container}>
            <div>
              <span>
                <Icon icon="healthicons:doctor" color="#16a34a" width={50} />
              </span>
            </div>
            <div>
              <span>Dr. Aimable Ishimwe (OPHT)</span>
            </div>
            <div>
              <span className={classes.patients__number}>20</span>
            </div>
            <div>
              <span>Patients</span>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={classes.card__container}>
            <div>
              <span>
                <Icon icon="healthicons:doctor" color="#16a34a" width={50} />
              </span>
            </div>
            <div>
              <span>Dr. Aimable Ishimwe (DENT)</span>
            </div>
            <div>
              <span className={classes.patients__number}>20</span>
            </div>
            <div>
              <span>Patients</span>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={classes.card__container}>
            <div>
              <span>
                <Icon icon="healthicons:doctor" color="#16a34a" width={50} />
              </span>
            </div>
            <div>
              <span>Dr. Aimable Ishimwe (GYN)</span>
            </div>
            <div>
              <span className={classes.patients__number}>20</span>
            </div>
            <div>
              <span>Patients</span>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={classes.card__container}>
            <div>
              <span>
                <Icon icon="healthicons:doctor" color="#16a34a" width={50} />
              </span>
            </div>
            <div>
              <span>Dr. Aimable Ishimwe (PD)</span>
            </div>
            <div>
              <span className={classes.patients__number}>20</span>
            </div>
            <div>
              <span>Patients</span>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={classes.card__container}>
            <div>
              <span>
                <Icon icon="healthicons:doctor" color="#16a34a" width={50} />
              </span>
            </div>
            <div>
              <span>Dr. Aimable Ishimwe (OPHT)</span>
            </div>
            <div>
              <span className={classes.patients__number}>20</span>
            </div>
            <div>
              <span>Patients</span>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={classes.card__container}>
            <div>
              <span>
                <Icon icon="healthicons:doctor" color="#16a34a" width={50} />
              </span>
            </div>
            <div>
              <span>Dr. Aimable Ishimwe (DENT)</span>
            </div>
            <div>
              <span className={classes.patients__number}>20</span>
            </div>
            <div>
              <span>Patients</span>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={classes.card__container}>
            <div>
              <span>
                <Icon icon="healthicons:doctor" color="#16a34a" width={50} />
              </span>
            </div>
            <div>
              <span>Dr. Aimable Ishimwe (GYN)</span>
            </div>
            <div>
              <span className={classes.patients__number}>20</span>
            </div>
            <div>
              <span>Patients</span>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default PatientsWithDoctors
