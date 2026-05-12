import React from "react";

const ProfileCard = () => {

  // Get logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="w-36 h-44 lg:w-60 lg:h-72 rounded-2xl shadow-lg bg-white relative overflow-hidden group">

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">

        <img
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
          src={
            user?.profileImage ||
            "https://i.pinimg.com/736x/1c/88/70/1c887069fec338e0ff5285bd5cbe7511.jpg"
          }
          alt="admin-profile"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

      </div>

      {/* Text Section */}
      <div className="relative flex flex-col justify-end h-full p-4">

        <p className="text-white text-sm lg:text-2xl font-bold tracking-wide">

          {user?.name || "Admin User"}

        </p>

        <p className="text-cyan-200 text-xs lg:text-sm font-medium mt-1">

          {user?.email || "admin@gmail.com"}

        </p>

        <p className="text-gray-200 text-xs lg:text-sm mt-1 capitalize">

          {user?.role || "admin"}

        </p>

      </div>

    </div>
  );
};

export default ProfileCard;