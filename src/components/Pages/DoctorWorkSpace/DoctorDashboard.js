import React from "react";
import { Row, Col, Divider, Badge, Avatar, Button } from "antd";
import Search from "./Search";
import { BellOutlined } from "@ant-design/icons";
import classes from "./workspace.module.css";
import PatientList from "./Patients";
import Overview from "./PatientOverView";
import AbsanceRequestForm from "./AbsanceModal";
import LeaveOfAbsenceList from "./AbsenceList";

const DoctorDashboard = () => {
  const [list, setList] = React.useState(false);
  const [patient, setPatient] = React.useState(true);

  const showList = () => {
    setList(true);
    setPatient(false);
  };
  const showPatient = () => {
    setList(false);
    setPatient(true);
  };
  return (
    <React.Fragment>
      <Row>
        <Col
          span={8}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        >
          <div>
            <AbsanceRequestForm />

            <Button
              type="primary"
              style={{ margin: "0px 10px 0px 10px" }}
              onClick={showList}
            >
              Absence List
            </Button>
            <Button type="primary"  onClick={showPatient}>
              Patients
            </Button>
          </div>
        </Col>
        <Col
          span={8}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        >
          <div>
            <Search />
          </div>
        </Col>
        <Col
          span={8}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        >
          <div>
            <Badge
              count={99}
              overflowCount={10}
              className={classes.nottofications}
            >
              <Avatar icon={<BellOutlined />} size="large" />
            </Badge>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" />
      {list && (
        <Row>
          <Col
            span={24}
            xs={{ order: 4 }}
            sm={{ order: 3 }}
            md={{ order: 2 }}
            lg={{ order: 1 }}
          >
            <div>
              <LeaveOfAbsenceList />
            </div>
          </Col>
        </Row>
      )}
      {patient && (
        <Row>
          <Col
            span={4}
            xs={{ order: 4 }}
            sm={{ order: 3 }}
            md={{ order: 2 }}
            lg={{ order: 1 }}
          >
            <div>
              <PatientList />
            </div>
          </Col>
          <Col
            span={20}
            xs={{ order: 4 }}
            sm={{ order: 3 }}
            md={{ order: 2 }}
            lg={{ order: 1 }}
          >
            <div>
              <Overview />
            </div>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

export default DoctorDashboard;
