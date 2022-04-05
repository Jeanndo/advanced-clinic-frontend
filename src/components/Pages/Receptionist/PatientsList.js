import React from "react"
import { Tabs } from "antd"
import Patients from "./PatientsTable"
import classes from "./style.module.css"

const { TabPane } = Tabs

const PatientsList = () => {
  const callback = (key) => {
    console.log(key)
  }

  return (
    <React.Fragment>
      <Tabs defaultActiveKey="1" onChange={callback} className={classes.Tabs}>
        <TabPane tab="PATIENTS" key="1">
          <Patients />
        </TabPane>
        <TabPane tab="DOCTORS" key="2">
          DOCTORS
        </TabPane>
        <TabPane tab="LABORATORIES" key="3">
          LABORATORIES
        </TabPane>
        <TabPane tab="SURVEY" key="4">
          SURVEY
        </TabPane>
      </Tabs>
    </React.Fragment>
  )
}

export default PatientsList
