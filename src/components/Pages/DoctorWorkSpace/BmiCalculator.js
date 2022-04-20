import React from "react"
import { Row, Col, Divider } from "antd"
import classes from "./workspace.module.css"
import BodyParts from "./../../../assets/BodyImage.png"
import { Slider } from "antd"
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"

const BmiCalculator = () => {
  const [bmi, setBmi] = React.useState(21)

  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <h5 className={classes.bmi__calculator__title}>BMI Calculator</h5>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={classes.bmi__calculator__date__picker}>
            <input type="Date" />
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className={classes.bmi__calculator__displays__container}>
            <div className={classes.bmiwith__height__container}>
              <div className={classes.bmi__calculator__height__reader}>
                <div
                  className={classes.height__first__two__grey__leader_lines}
                ></div>
                <div
                  className={classes.height__first__two__grey__leader_lines}
                ></div>
                <div className={classes.height_third_readerline}></div>
                <div className={classes.height__fourth__reader__line}></div>
                <div
                  className={classes.height__next__three__reader__line}
                ></div>
                <div
                  className={classes.height__next__three__reader__line}
                ></div>
                <div
                  className={classes.height__next__three__reader__line}
                ></div>
                <div className={classes.height__eigth__reader__line}></div>
                <div className={classes.height__ninth__reader__line}></div>
                <div>
                  <span>H 170 cm</span>
                </div>
              </div>

              <div className={classes.bmi__calculator__weight__reader}>
                <div
                  className={classes.height__first__two__grey__leader_lines}
                ></div>
                <div
                  className={classes.height__first__two__grey__leader_lines}
                ></div>
                <div className={classes.height_third_readerline}></div>
                <div className={classes.height__fourth__reader__line}></div>
                <div
                  className={classes.height__next__three__reader__line}
                ></div>
                <div
                  className={classes.height__next__three__reader__line}
                ></div>
                <div
                  className={classes.height__next__three__reader__line}
                ></div>
                <div className={classes.height__eigth__reader__line}></div>
                <div className={classes.height__ninth__reader__line}></div>
                <div>
                  <span>W 72 kg</span>
                </div>
              </div>
            </div>
            <div className={classes.bmi__calculator__results__container}>
              <span className={classes.bmi__title}>Body Mass Index (BMI)</span>
              <div className={classes.bmi__calculator__results}>
                <div className={classes.bmi__calculator__results__figures}>
                  {bmi}
                </div>
                <div className={classes.bmi__calculator__results__text}>
                  Healthy
                </div>
              </div>
              <Slider
                defaultValue={bmi}
                onChange={(event) => setBmi(event.target.value)}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" style={{ backgroundColor: "#4F4E4E" }} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className={classes.body__measurement__container}>
            <h5>Body Measurements</h5>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 2 }}>
        <Col className="gutter-row" span={24}>
          <div className={classes.body__parts__measurments}>
            <div className={classes.body__parts}>
              <div className={classes.body__parts_card}>
                <div>Chest (cm)</div>
                <div>
                  44.5
                  <span>
                    <ArrowUpOutlined style={{ color: "#E95D5C" }} />
                  </span>
                </div>
              </div>
              <div className={classes.body__parts_card}>
                <div>Waist (cm)</div>
                <div>
                  34
                  <span>
                    <ArrowDownOutlined style={{ color: "#90DF9E" }} />
                  </span>
                </div>
              </div>
              <div className={classes.body__parts_card}>
                <div>Hip (cm)</div>
                <div>
                  42.5
                  <span>
                    <ArrowDownOutlined style={{ color: "#90DF9E" }} />
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.body__parts__image}>
              <img src={BodyParts} alt="body parts" />
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default BmiCalculator
