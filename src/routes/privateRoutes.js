// @ts-nocheck
import React, { Suspense, Fragment } from "react"
import { Switch } from "react-router-dom"
import DashboardRoute from "./customRoutes/DashboardRoutes"
import Dashboard from "./../components/Dashboard/Dashboard"
import Users from "./../components/Dashboard/Users"
import Departments from "./../components/Dashboard/Departments"
import Doctors from "./../components/Dashboard/Doctors"
import Patients from "./../components/Dashboard/Patients"
import Medecine from "./../components/Dashboard/Medecine"
import Suppliers from "./../components/Dashboard/Suppliers"
import Labs from "./../components/Dashboard/Labs"
import Appointments from "./../components/Dashboard/Appointments"
import Bills from "./../components/Dashboard/Bills"
import Insurances from "./../components/Dashboard/Insurances"
import Receptionist from "./../components/Dashboard/Reception"
import Roles from "./../components/Dashboard/Roles"
import AddUser from "./../components/Pages/users/AddUer"
import DoctorsWorkSpace from "./../components/Dashboard/DoctorPanel"
import NursePanel from "./../components/Dashboard/NursePanel"

const PrivateRoutes = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              width: "100%",
              textAlign: "center",
              paddingTop: "calc(50vh - 7px)",
            }}
          >
            Wait a Moment ....
          </div>
        }
      >
        <Switch>
          <DashboardRoute exact path="/" component={Dashboard} />
          <DashboardRoute exact path="/users" component={Users} />
          <DashboardRoute exact path="/department" component={Departments} />
          <DashboardRoute exact path="/doctor" component={Doctors} />
          <DashboardRoute exact path="/patient" component={Patients} />
          <DashboardRoute exact path="/medecine" component={Medecine} />
          <DashboardRoute exact path="/supplier" component={Suppliers} />
          <DashboardRoute exact path="/lab" component={Labs} />
          <DashboardRoute exact path="/appointment" component={Appointments} />
          <DashboardRoute exact path="/bill" component={Bills} />
          <DashboardRoute exact path="/insurance" component={Insurances} />
          <DashboardRoute exact path="/reception" component={Receptionist} />
          <DashboardRoute exact path="/roles" component={Roles} />
          <DashboardRoute exact path="/adduser" component={AddUser} />
          <DashboardRoute
            exact
            path="/doctor/workspace"
            component={DoctorsWorkSpace}
          />
          <DashboardRoute
            exact
            path="/nurse/workspace"
            component={NursePanel}
          />
        </Switch>
      </Suspense>
    </Fragment>
  )
}

export default PrivateRoutes
