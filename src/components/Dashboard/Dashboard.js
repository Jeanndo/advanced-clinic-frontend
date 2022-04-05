import React from "react"
import { Statistic, Row, Col, Card } from "antd"

const Dashboard = () => {
  return (
    <div className="p-5">
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Patients" value={112893} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Doctors" value={112893} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Departments" value={112893} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
