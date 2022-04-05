import React from "react"
import { Layout } from "antd"
import TopNav from "./../components/Dashboard/NavBar"
import SideMenu from "./../components/Dashboard/SideMenu"
import Footer from "./../components/Dashboard/Footer"

const { Content } = Layout

const Dashboard = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Layout>
        <TopNav />
        <Content style={{ margin: "20px 16px" }}>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  )
}
export default Dashboard
