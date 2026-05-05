import React from 'react'

const StatCard = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-4 lg:mt-10 max-w-3xl">

        <div className="bg-gray-800 shadow-md rounded-xl p-5">
            <p className="text-white text-sm">
            Total Users
            </p>
            <p className="text-3xl text-white font-bold mt-1">
            12
            </p>
        </div>

        <div className="bg-gray-800 shadow-md rounded-xl p-5">
            <p className="text-white text-sm">
            Employees
            </p>
            <p className="text-3xl text-white font-bold mt-1">
            75
            </p>
        </div>

        <div className="bg-gray-800 shadow-md rounded-xl p-5">
            <p className="text-white text-sm">
            Employers
            </p>
            <p className="text-3xl text-white font-bold mt-1">
            30
            </p>
        </div>

        <div className="bg-gray-800 shadow-md rounded-xl p-5">
            <p className="text-white text-sm">
            Jobs
            </p>
            <p className="text-3xl text-white font-bold mt-1">
            55
            </p>
        </div>

    </div>
  )
}

export default StatCard

