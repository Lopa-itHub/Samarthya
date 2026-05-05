import React from 'react'

const ProfileCard = () => {
  return (
    <div className="w-36 h-44 lg:w-60 lg:h-72 rounded-xl shadow-md bg-white relative overflow-hidden">

        {/* image */}
        <div className="absolute top-0 left-0 w-full h-full">
        <img
            className="h-full w-full object-cover"
            src="https://i.pinimg.com/736x/1c/88/70/1c887069fec338e0ff5285bd5cbe7511.jpg"
            alt=""
        />
        </div>


        {/* text */}
        <div className="relative flex flex-col justify-end h-full p-4">

        <p className="text-white text-md lg:text-2xl font-semibold">
            Sakshi Kumari
        </p>

        <p className="text-gray-200 text-sm">
            Employer
        </p>

        <p className="text-gray-300 text-sm">
            Administrator
        </p>

        </div>

    </div>
  )
}

export default ProfileCard
