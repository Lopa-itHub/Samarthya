import React from "react";

const DashboardHeader = () => {

  // Get logged-in admin
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>

      <p className="text-2xl lg:text-4xl text-cyan-700 font-semibold">

        Welcome, {user?.name || "Admin"}

      </p>

      <p className="text-gray-600 mt-2">

        Manage users, jobs and platform activity.

      </p>

    </div>
  );
};

export default DashboardHeader;