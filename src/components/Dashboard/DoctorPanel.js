import React from "react"
import Dashboard from "./../Pages/DoctorWorkSpace/DoctorDashboard"
import classes from "./dashboard.module.css"

const IncommingPatients = () => {
  return (
    <React.Fragment>
      <div className={classes.bodybgcolor}>
        <Dashboard />
      </div>
    </React.Fragment>
  )
}

export default IncommingPatients
