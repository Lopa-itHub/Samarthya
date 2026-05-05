import React from 'react'

const RecentUsers = () => {

    const users = [
    {
      name: "Rahul Das",
      role: "Employee",
      time: "2 days ago",
      status: "Active",
    },
    {
      name: "Anita Sharma",
      role: "Employer",
      time: "Today",
      status: "Inactive",
    },
    {
      name: "Kiran Patel",
      role: "Employee",
      time: "Yesterday",
      status: "Active",
    },
  ];

  return (
    <div className="bg-white shadow rounded-xl p-6 mt-6">
      {/* Title */}
      <div className="flex justify-between items-center mb-5">
        <p className="text-2xl font-bold">
          Recent users
        </p>

        <button className="text-cyan-600 text-sm font-medium hover:underline">
          View all
        </button>
      </div>

      {/* Job List */}
      <div className="flex flex-col divide-y">
        {users.map((users, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4"
          >
            {/* Left Side */}
            <div className="flex flex-col">
              <p className="font-semibold text-lg">
                {users.name}
              </p>

              <div className="flex gap-4 text-sm text-gray-500 mt-1">
                <span>{users.role}</span>
                <span>{users.time}</span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded text-sm font-medium ${
                  users.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {users.status}
              </span>

              <button className="text-cyan-600 text-sm font-medium hover:underline">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentUsers
