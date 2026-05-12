import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StatCard = () => {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalUsers: 0,
    employees: 0,
    employers: 0,
    admins: 0,
    jobs: 0,
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {

    try {

      const response = await axios.get(
        "http://localhost:3000/api/admin/dashboard",
        {
          withCredentials: true,
        }
      );

      setStats(response.data);

    } catch (error) {

      console.log("Dashboard stats error:", error);

    }
  };

  return (

    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-4 lg:mt-10 w-full">

      {/* Total Users */}
      <div
        onClick={() => navigate("/admin/users")}
        className="bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-2xl p-5 shadow-lg cursor-pointer hover:scale-105 transition duration-300"
      >

        <p className="text-white text-sm lg:text-base font-medium">
          Total Users
        </p>

        <p className="text-3xl text-white font-bold mt-2">
          {stats.totalUsers}
        </p>

      </div>

      {/* Employees */}
      <div
        onClick={() => navigate("/admin/users?role=employee")}
        className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-5 shadow-lg cursor-pointer hover:scale-105 transition duration-300"
      >

        <p className="text-white text-sm lg:text-base font-medium">
          Employees
        </p>

        <p className="text-3xl text-white font-bold mt-2">
          {stats.employees}
        </p>

      </div>

      {/* Employers */}
      <div
        onClick={() => navigate("/admin/users?role=employer")}
        className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-5 shadow-lg cursor-pointer hover:scale-105 transition duration-300"
      >

        <p className="text-white text-sm lg:text-base font-medium">
          Employers
        </p>

        <p className="text-3xl text-white font-bold mt-2">
          {stats.employers}
        </p>

      </div>

      {/* Admins */}
      <div
        onClick={() => navigate("/admin/users?role=admin")}
        className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-5 shadow-lg cursor-pointer hover:scale-105 transition duration-300"
      >

        <p className="text-white text-sm lg:text-base font-medium">
          Admins
        </p>

        <p className="text-3xl text-white font-bold mt-2">
          {stats.admins}
        </p>

      </div>

      {/* Jobs */}
    <div
  onClick={() => navigate("/admin/jobs")}
  className="col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-5 shadow-lg cursor-pointer hover:scale-105 transition duration-300"
>

        <p className="text-white text-sm lg:text-base font-medium">
          Jobs
        </p>

        <p className="text-3xl text-white font-bold mt-2">
          {stats.jobs}
        </p>

      </div>

    </div>
  );
};

export default StatCard;