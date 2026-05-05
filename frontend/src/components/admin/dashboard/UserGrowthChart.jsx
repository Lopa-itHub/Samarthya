import React from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserGrowthChart = () => {

    const monthlyData = [
        { name: "Jan", users: 20 },
        { name: "Feb", users: 35 },
        { name: "Mar", users: 50 },
        { name: "Apr", users: 45 },
        { name: "May", users: 60 },
        { name: "Jun", users: 75 },
        { name: "Jul", users: 90 },
        { name: "Aug", users: 85 },
        { name: "Sep", users: 100 },
        { name: "Oct", users: 120 },
        { name: "Nov", users: 140 },
        { name: "Dec", users: 160 },
    ];

  return (
    <div className="bg-white shadow rounded-xl p-6 mt-6">

        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">
            User Growth (Monthly)
          </p>
          <p className="text-sm text-gray-500">
            Last 12 months
          </p>
        </div>

        <div>
          <ResponsiveContainer width="90%" height={300}>
            <LineChart data={monthlyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#0891b2"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
  )
}

export default UserGrowthChart
