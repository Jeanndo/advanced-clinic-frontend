import React from "react";
import { Row, Col,Badge, Avatar,Divider } from "antd";
import {UserOutlined,BellOutlined} from "@ant-design/icons"
import PatientsList from "./PatientTable";
import Search from "./search";
import classes from "./nurse.module.css"



const Dashboard = () => {
  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <Search />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={classes.right_top_side_contents}>
            <div className={classes.actionButtons}>
              <button>Doctors</button>
              <button>Help</button>
            </div>
            <div className={classes.badges}>
              <div className={classes.people_badge}>
              <Badge count={99} overflowCount={10} >
                <Avatar icon={<UserOutlined />} size="large" style={{backgroundColor:"#fff",color:"#000",cursor: "pointer"}}/>
              </Badge>
              </div>
              <Divider type="vertical" style={{height: '40px'}}/>
              <div className={classes.notifications_badge}>
              <Badge count={99} overflowCount={10}>
                <Avatar icon={<BellOutlined />} size="large" style={{backgroundColor:"#fff",color:"#000",cursor:"pointer"}}/>
              </Badge>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Divider orientation="left"/>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={24}>
      <div  className={classes.patient_container}><PatientsList/></div>
      </Col>
      </Row>
    </React.Fragment>
  );
};
export default Dashboard;
