import React from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import { WidgetSM, WidgetLG } from '../../components/Widget/Widget';
import { userData } from '../../DummyData';
import './dashboard.css'

export default function Home() {
  return (
    <div className="dashboard">
      <FeaturedInfo />
      <Chart data={userData} title="Active Users" dataKey="name" grid />
      <div className="dashboardWidgets">
        <WidgetSM />
        <WidgetLG />
      </div>
    </div>
  )
}
