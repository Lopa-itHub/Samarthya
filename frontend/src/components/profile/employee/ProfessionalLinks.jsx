import React from "react";

const ProfessionalLinks = ({
    profile
}) => {

    const links =
        profile?.professionalLinks || [];

    return (

        <div className="bg-white rounded-xl shadow p-5 mt-5">

            <h2 className="text-xl font-semibold mb-3">
                Professional Links
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {profile?.professionalLinks?.map((link, index) => (

                    <a
                        key={index}

                        href={link.url}
                        target="_blank"
                        rel="noreferrer"

                        className="
          border border-gray-200
          rounded-2xl
          p-4

          flex items-center justify-between

          hover:shadow-md
          hover:border-cyan-300

          transition-all
        "
                    >

                        <div>

                            <p className="font-semibold text-gray-800">
                                {link.title}
                            </p>

                            <p className="text-sm text-gray-500">
                                External Link
                            </p>

                        </div>

                        <span className="text-cyan-700 text-sm font-medium">
                            Visit
                        </span>

                    </a>

                ))}

            </div>

        </div>

    );

};

export default ProfessionalLinks;