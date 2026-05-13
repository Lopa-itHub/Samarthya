import React from "react";

const Certifications = ({
    profile
}) => {

    const certifications =
        profile?.certifications || [];

    return (

        <div className="bg-white rounded-xl shadow p-5 mt-5">

            <h2 className="text-xl font-semibold mb-3">
                Certifications & Licenses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {profile?.certifications?.map((cert, index) => (

                    <div
                        key={index}

                        className="
          border border-gray-200
          rounded-2xl
          p-4

          flex items-center justify-between

          hover:shadow-md
          transition-all
        "
                    >

                        <div>

                            <p className="font-semibold text-gray-800">
                                {cert.title}
                            </p>

                            <p className="text-sm text-gray-500">
                                Certification
                            </p>

                        </div>

                        <a
                            href={cert.fileUrl}
                            target="_blank"
                            rel="noreferrer"

                            className="
            text-cyan-700
            font-medium
            text-sm
          "
                        >
                            View
                        </a>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default Certifications;