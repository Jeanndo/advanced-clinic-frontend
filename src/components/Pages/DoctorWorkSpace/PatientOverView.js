import React from "react";
import classes from "./workspace.module.css";
import { Divider, Row, Col } from "antd";
import BloodIcon from "./../../../assets/blood.png";
import TempIcon from "./../../../assets/Temp.png";
import HeartIcon from "./../../../assets/Haert.png";
import cardiologist from "./../../../assets/gridicons_read-more.png";
import BloodChart from "./BloodChart";
import TempChart from "./TemperatureChart";
import HeartRateChart from "./HeartRateChart";
import BmiCalculator from "./BmiCalculator";
import DiagnosticModal from "./DiagnosticModal";
import RequestExamModal from "./ExamModal";
import PrescribeMedModal from "./PrescribeModal";
import ExamResults from "./ResultModal";

const PatientOverView = () => {
  return (
    <div className={classes.over__view_container}>
      <div className={classes.overview}>
        <div className={classes.over__view_label}>
          <h5>Over View</h5>
        </div>
        <div className={classes.overview__action}>
          <button>Prescriptions</button>
          <button>Patient's History</button>
          <button>Lab Tests</button>
          <button>Imaging</button>
          <button>Vital Signs</button>
          <button>Patient's Details</button>
        </div>
        <div className={classes.overview__info}>
          <div>
            <h4>Gender</h4>
            <span>Female</span>
          </div>
          <div>
            <h4>Date of Birth</h4>
            <span>28 March 1999</span>
          </div>
          <div>
            <h4>CARE PLAN</h4>
            <span>RAMA</span>
          </div>
        </div>
      </div>
      <div className={classes.patient__data}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 4 }}>
          <Col className="gutter-row" span={6}>
            <div>
              <DiagnosticModal />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <RequestExamModal />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <PrescribeMedModal />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <ExamResults />
            </div>
          </Col>
        </Row>
        <Divider orientation="left" />
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 8 }}>
          <Col className="gutter-row" span={8}>
            <div className={classes.card}>
              <div className={classes.disease}>
                <div className={classes.BloodIcon_container}>
                  <img src={BloodIcon} alt="blood pressure icon" />
                </div>
                <div className={classes.leading__label}>
                  <label>Blood Pressure</label>
                </div>
              </div>
              <div>
                <h4>
                  102<span>/72 mmh</span>
                </h4>
                <span className={classes.blood__pressure__label}>Normal</span>
              </div>
              <div>
                <BloodChart />
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className={classes.card}>
              <div className={classes.disease}>
                <div className={classes.temperatureIcon__container}>
                  <img src={TempIcon} alt="temperature" />
                </div>
                <div className={classes.leading__label}>
                  <label>Temperature</label>
                </div>
              </div>
              <div>
                <h4>
                  98.6<span>°F</span>
                </h4>
                <span className={classes.temperature__label}>Normal</span>
              </div>
              <div>
                <TempChart />
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className={classes.card}>
              <div className={classes.disease}>
                <div className={classes.heartIcon__container}>
                  <img src={HeartIcon} alt="Heart icon" />
                </div>
                <div className={classes.leading__label}>
                  <label>Heart Rate</label>
                </div>
              </div>
              <div>
                <h4>
                  98<span>bpm</span>
                </h4>
                <span className={classes.heart__rate__label}>Normal</span>
              </div>
              <div>
                <HeartRateChart />
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 8 }}>
          <Col className="gutter-row" span={8}>
            <div className={classes.cardiologistCard}>
              <div className={classes.disease}>
                <div className={classes.BloodIcon_container}>
                  <img src={cardiologist} alt="blood pressure icon" />
                </div>
                <div className={classes.leading__label}>
                  <label>Cardiologist</label>
                </div>
              </div>
              <div className={classes.cardiologyDate}>
                <label>26 th - November 2021</label>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className={classes.cardiologistCard}>
              <div className={classes.disease}>
                <div className={classes.BloodIcon_container}>
                  <img src={cardiologist} alt="blood pressure icon" />
                </div>
                <div className={classes.leading__label}>
                  <label>Cardiologist</label>
                </div>
              </div>
              <div className={classes.cardiologyDate}>
                <label>26 th - November 2021</label>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className={classes.cardiologistCard}>
              <div className={classes.disease}>
                <div className={classes.BloodIcon_container}>
                  <img src={cardiologist} alt="blood pressure icon" />
                </div>
                <div className={classes.leading__label}>
                  <label> Cardiologist</label>
                </div>
              </div>
              <div className={classes.cardiologyDate}>
                <label>26 th - November 2021</label>
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 8 }}>
          <Col className="gutter-row" span={8}>
            <div className={classes.cardiologistCard}>
              <div className={classes.disease}>
                <div className={classes.BloodIcon_container}>
                  <img src={cardiologist} alt="blood pressure icon" />
                </div>
                <div className={classes.leading__label}>
                  <label>Cardiologist</label>
                </div>
              </div>
              <div className={classes.cardiologyDate}>
                <label>26 th - November 2021</label>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className={classes.cardiologistCard}>
              <div className={classes.disease}>
                <div className={classes.BloodIcon_container}>
                  <img src={cardiologist} alt="blood pressure icon" />
                </div>
                <div className={classes.leading__label}>
                  <label>Cardiologist</label>
                </div>
              </div>
              <div className={classes.cardiologyDate}>
                <label>26 th - November 2021</label>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className={classes.cardiologistCard}>
              <div className={classes.disease}>
                <div className={classes.BloodIcon_container}>
                  <img src={cardiologist} alt="blood pressure icon" />
                </div>
                <div className={classes.leading__label}>
                  <label>Cardiologist</label>
                </div>
              </div>
              <div className={classes.cardiologyDate}>
                <label>26 th - November 2021</label>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={classes.bmi__calculator}>
        <BmiCalculator />
      </div>
    </div>
  );
};

export default PatientOverView;
