import React from 'react'
import {FiUsers, FiBriefcase, FiFileText } from "react-icons/fi";

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">

        {/* Manage users */}
        <div className="bg-cyan-600 text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition">

          <p className="text-lg font-semibold">
            Manage Users
          </p>

          <p className="text-sm text-cyan-100 mt-1">
            View and control all users
          </p>

        </div>


        {/* Manage Jobs */}
        <div className="bg-emerald-900 rounded-xl p-6 shadow-md hover:scale-[1.02] transition">

          <p className="text-lg text-white font-semibold">
            Manage Jobs
          </p>

          <p className="text-sm text-white mt-1">
            Monitor all job postings
          </p>

        </div>


        {/* Reports */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:scale-[1.02] transition">

          <p className="text-lg text-white font-semibold">
            Reports
          </p>

          <p className="text-sm text-white mt-1">
            View complaints & reports
          </p>

        </div>

      </div>
  )
}

export default QuickActions
