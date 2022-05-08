import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const { Sider } = Layout;
const { SubMenu } = Menu;

const DashboardSideNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      // style={{ backgroundColor: "#fff" }}
    >
      <div className="logoBox" style={{ padding: "7px" }}>
        <img
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "100px",
            objectFit: "cover",
          }}
          src="https://banner2.cleanpng.com/20180425/gdq/kisspng-icon-hospital-computer-icons-medicine-5ae09c6c04f511.4019437415246695480203.jpg"
          alt="log"
        />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/" icon={<Icon icon="bxs:dashboard" color="#1890ff" />}>
          <span>
            <strong>Dashboard</strong>
          </span>
          <Link to="/"></Link>
        </Menu.Item>
        <Menu.Item
          key="/reception"
          icon={
            <Icon icon="emojione-monotone:desktop-computer" color="#1890ff" />
          }
        >
          <span>
            <strong>Reception</strong>
          </span>
          <Link to="/reception"></Link>
        </Menu.Item>
        <Menu.Item
          key="/department"
          icon={<Icon icon="jam:sitemap-f" color="#1890ff" />}
        >
          <span>
            <strong>Departments</strong>
          </span>
          <Link to="/department"></Link>
        </Menu.Item>
        <Menu.Item
          key="/doctor"
          icon={<Icon icon="healthicons:doctor-female" color="#1890ff" />}
        >
          <span>
            <strong>Doctors</strong>
          </span>
          <Link to="/doctor"></Link>
        </Menu.Item>
        <Menu.Item
          key="/patient"
          icon={<Icon icon="healthicons:inpatient" color="#1890ff" />}
        >
          <span>
            <strong>Patients</strong>
          </span>
          <Link to="/patient"></Link>
        </Menu.Item>
        <Menu.Item
          key="/medecine"
          icon={<Icon icon="emojione-monotone:pill" color="#1890ff" />}
        >
          <span>
            <strong>Medecine</strong>
          </span>
          <Link to="/medecine"></Link>
        </Menu.Item>
        <Menu.Item
          key="/supplier"
          icon={<Icon icon="ic:baseline-sell" color="#1890ff" />}
        >
          <span>
            <strong>Suppliers</strong>
          </span>
          <Link to="/supplier"></Link>
        </Menu.Item>
        <Menu.Item
          key="/lab"
          icon={<Icon icon="icomoon-free:lab" color="#1890ff" />}
        >
          <span>
            <strong>Labs</strong>
          </span>
          <Link to="/lab"></Link>
        </Menu.Item>
        <Menu.Item
          key="/appointment"
          icon={<Icon icon="ant-design:calendar-filled" color="#1890ff" />}
        >
          <span>
            <strong>Appointments</strong>
          </span>
          <Link to="/appointment"></Link>
        </Menu.Item>
        <Menu.Item
          key="/bill"
          icon={<Icon icon="emojione-monotone:money-bag" color="#1890ff" />}
        >
          <span>
            <strong>Bills</strong>
          </span>
          <Link to="/bill"></Link>
        </Menu.Item>
        <Menu.Item
          key="/Insurance"
          icon={<Icon icon="map:insurance-agency" color="#1890ff" />}
        >
          <span>
            <strong>Insurance</strong>
          </span>
          <Link to="/Insurance"></Link>
        </Menu.Item>

        <SubMenu
          key="/users"
          icon={<Icon icon="icomoon-free:users" color="#1890ff" />}
          title="Users"
        >
          <Link to="/users" />
          <Menu.Item key="/adduser">
            <span>
              <strong>Add User</strong>
            </span>
            <Link to="/adduser" />
          </Menu.Item>
          <Menu.Item key="/users">
            <span>
              <strong>User Lists</strong>
            </span>
            <Link to="/users" />
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          key="/roles"
          icon={<Icon icon="arcticons:permissionmanagerx" color="#1890ff" />}
        >
          <span>
            <strong>Roles</strong>
          </span>
          <Link to="/roles" />
        </Menu.Item>
        <SubMenu
          key="/doctor/workspace"
          icon={<Icon icon="healthicons:doctor-female" color="#1890ff" />}
          title="Doctor'WorkSpace"
        >
          <Menu.Item key="/doctor/workspace">
            <span>
              <strong>Dashboard</strong>
            </span>
            <Link to="/doctor/workspace" />
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="/nurse/workspace"
          icon={<Icon icon="healthicons:doctor-female" color="#1890ff" />}
          title="Nurse's workspace"
        >
          <Menu.Item key="/nurse/workspace">
            <span>
              <strong>Dashboard</strong>
            </span>
            <Link to="/nurse/workspace" />
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default DashboardSideNavBar;
