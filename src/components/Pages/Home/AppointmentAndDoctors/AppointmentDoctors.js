import React from "react";
import classes from "./style.module.css";
import { Row, Col } from "antd";
import { CheckOutlined,CloseOutlined } from "@ant-design/icons";

const AppointmentDoctors = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <div className={classes.appointment__container}>
            <div className={classes.appointment__title}><h5>Today's Registered Appointments</h5></div>
              <div className={classes.Appointment}>
                
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/59208992?v=4"
                    alt=""
                  />
                </div>
                <div>
                  <h5>Samantha Holmes</h5>
                  <span className={classes.service}>Pediatrics</span>
                </div>
                <div>
                  <span className={classes.status__Icon}>
                    <CheckOutlined />
                  </span>
                  <span>13:35 PM</span>
                </div>
              </div>
              <div className={classes.Appointment}>
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/59208992?v=4"
                    alt=""
                  />
                </div>
                <div>
                  <h5>Samantha Holmes</h5>
                  <span className={classes.service}>Pediatrics</span>
                </div>
                <div>
                  <span className={classes.status__Icon_close}>
                  <CloseOutlined />
                  </span>
                  <span>13:35 PM</span>
                </div>
              </div>
              <div className={classes.Appointment}>
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/59208992?v=4"
                    alt=""
                  />
                </div>
                <div>
                  <h5>Samantha Holmes</h5>
                  <span className={classes.service}>Pediatrics</span>
                </div>
                <div>
                  <span className={classes.status__Icon}>
                    <CheckOutlined />
                  </span>
                  <span>13:35 PM</span>
                </div>
              </div>
              <div className={classes.Appointment}>
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/59208992?v=4"
                    alt=""
                  />
                </div>
                <div>
                  <h5>Samantha Holmes</h5>
                  <span className={classes.service}>Pediatrics</span>
                </div>
                <div>
                <span className={classes.status__Icon_close}>
                    <CloseOutlined /> 
                  </span>
                  <span>13:35 PM</span>
                </div>
              </div>
              <div className={classes.Appointment}>
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/59208992?v=4"
                    alt=""
                  />
                </div>
                <div>
                  <h5>Samantha Holmes</h5>
                  <span className={classes.service}>Pediatrics</span>
                </div>
                <div>
                  <span className={classes.status__Icon}>
                    <CheckOutlined />
                  </span>
                  <span>13:35 PM</span>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className={classes.appointment__container}>
            <div className={classes.appointment__title}><h5>Available Doctors</h5></div>
              <div className={classes.Appointment}>
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/59208992?v=4"
                    alt=""
                  />
                </div>
                <div>
                  <h5>Samantha Holmes</h5>
                  <span className={classes.service}>Pediatrics</span>
                </div>
                <div>
                  <span className={classes.status__Icon}>
                    <CheckOutlined />
                  </span>
                </div>
              </div>
              <div className={classes.Appointment}>
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/59208992?v=4"
                    alt=""
                  />
                </div>
                <div>
                  <h5>Samantha Holmes</h5>
                  <span className={classes.service}>Pediatrics</span>
                </div>
                <div>
                <span className={classes.status__close_doctor}>
                    <CloseOutlined /> 
                  </span>
                </div>
              </div>
              <div className={classes.Appointment}>
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/59208992?v=4"
                    alt=""
                  />
                </div>
                <div>
                  <h5>Samantha Holmes</h5>
                  <span className={classes.service}>Pediatrics</span>
                </div>
                <div>
                  <span className={classes.status__Icon}>
                    <CheckOutlined />
                  </span>
                </div>
              </div>
              <div className={classes.Appointment}>
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/59208992?v=4"
                    alt=""
                  />
                </div>
                <div>
                  <h5>Samantha Holmes</h5>
                  <span className={classes.service}>Pediatrics</span>
                </div>
                <div>
                <span className={classes.status__close_doctor}>
                    <CloseOutlined /> 
                  </span>
                </div>
              </div>
              <div className={classes.Appointment}>
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/59208992?v=4"
                    alt=""
                  />
                </div>
                <div>
                  <h5>Samantha Holmes</h5>
                  <span className={classes.service}>Pediatrics</span>
                </div>
                <div>
                  <span className={classes.status__Icon}>
                    <CheckOutlined />
                  </span>
                 
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default AppointmentDoctors;
