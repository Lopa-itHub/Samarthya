const applicationModel =
require("../models/application.model");

const postedJobModel =
require("../models/postedJob.model");

async function employeeWorkHistoryController(
  req,
  res
) {

  try {

    const employeeId =
      req.user.id;

    const applications =
      await applicationModel
        .find({
          employeeId,
        })
        .sort({
          createdAt: -1,
        });

    const history =
      await Promise.all(

        applications.map(
          async (app) => {

            const job =
              await postedJobModel.findById(
                app.jobId
              );

            return {

              _id: app._id,

              status:
                app.status ||

                "Applied",

              createdAt:
                app.createdAt,

              jobTitle:
                job?.title ||

                "Deleted Job",

              company:
                job?.company ||

                "Samarthya Employer",

              category:
                job?.category ||

                "General",

              payment:
                job?.payment ||

                0,
            };
          }
        )
      );

    res.status(200).json({

      history,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Server error",
    });
  }
}

module.exports = {
  employeeWorkHistoryController,
};