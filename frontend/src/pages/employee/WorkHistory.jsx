import React, { useEffect,useState,} from "react";

import axios from "axios";

const WorkHistory = () => {

  const [
    history,
    setHistory,
  ] = useState([]);

  const [loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory =
    async () => {

      try {

        const token =
          localStorage.getItem("token");

        const response =
          await axios.get(

            "http://localhost:3000/api/employee/work-history",

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setHistory(
          response.data.history || []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="
      p-4
      lg:p-6
      bg-[#f5f7fb]
      min-h-screen
    ">

      {/* HEADER */}

      <div className="mb-8">

         <h1 className="text-4xl font-bold text-gray-800">

          Work History

        </h1>

        <p className="
          text-slate-500
          mt-2
        ">

          Track all your applications,
          accepted jobs and activity.

        </p>

      </div>

      {/* CONTENT */}

      <div className="
        bg-white
        rounded-3xl
        shadow-sm
        border
        border-slate-200
        p-6
      ">

        {
          loading

          ? (

            <p className="
              text-slate-500
            ">

              Loading history...

            </p>
          )

          : history.length === 0

          ? (

            <div className="
              text-center
              py-16
            ">

              <h2 className="
                text-2xl
                font-bold
                text-slate-700
              ">

                No Work History

              </h2>

              <p className="
                text-slate-500
                mt-3
              ">

                Your activity will appear here.

              </p>

            </div>

          )

          : (

            <div className="
              relative
              border-l-4
              border-cyan-500
              ml-3
              space-y-8
            ">

              {
                history.map((item) => (

                  <div
                    key={item._id}
                    className="
                      relative
                      pl-8
                    "
                  >

                    {/* DOT */}

                    <div className="
                      absolute
                      -left-[11px]
                      top-2
                      w-5
                      h-5
                      rounded-full
                      bg-cyan-500
                      border-4
                      border-white
                    " />

                    {/* CARD */}

                    <div className="
                      bg-gradient-to-r
                      from-cyan-50
                      to-blue-50
                      rounded-2xl
                      p-5
                      shadow-sm
                      border
                      border-cyan-100
                    ">

                      <div className="
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        md:justify-between
                        gap-3
                      ">

                        <div>

                          <h2 className="
                            text-xl
                            font-bold
                            text-slate-800
                          ">

                            {item.jobTitle}

                          </h2>

                          <p className="
                            text-slate-500
                            mt-1
                          ">

                            {item.company}

                          </p>

                        </div>

                        <span
                          className={`
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-semibold

                            ${
                              item.status ===
                              "Accepted"

                              ? "bg-green-100 text-green-700"

                              : item.status ===
                                "Rejected"

                              ? "bg-red-100 text-red-700"

                              : "bg-yellow-100 text-yellow-700"
                            }
                          `}
                        >

                          {item.status}

                        </span>

                      </div>

                      <div className="
                        mt-4
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-4
                        text-sm
                      ">

                        <div>

                          <p className="
                            text-slate-400
                          ">

                            Category

                          </p>

                          <p className="
                            font-medium
                            text-slate-700
                          ">

                            {item.category}

                          </p>

                        </div>

                        <div>

                          <p className="
                            text-slate-400
                          ">

                            Payment

                          </p>

                          <p className="
                            font-medium
                            text-slate-700
                          ">

                            ₹ {item.payment}

                          </p>

                        </div>

                        <div>

                          <p className="
                            text-slate-400
                          ">

                            Applied On

                          </p>

                          <p className="
                            font-medium
                            text-slate-700
                          ">

                            {
                              new Date(
                                item.createdAt
                              ).toLocaleDateString()
                            }

                          </p>

                        </div>

                      </div>

                    </div>

                  </div>
                ))
              }

            </div>
          )
        }

      </div>

    </div>
  );
};

export default WorkHistory;