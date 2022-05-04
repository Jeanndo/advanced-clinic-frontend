import React from "react";
import { Divider } from "antd";
import Doctors from "../Pages/Home/Doctors/Doctors";
import AppointmentDoctors from "./../Pages/Home/AppointmentAndDoctors/AppointmentDoctors"
import Analytics from "./../Pages/Home/Analytics/Analytics"

const Dashboard = () => {
  return (
    <React.Fragment>
      <Doctors />
      <Divider />
      <AppointmentDoctors/>
      <Divider />
      <Analytics/>
      <Divider />
    </React.Fragment>
  );
};

export default Dashboard;
