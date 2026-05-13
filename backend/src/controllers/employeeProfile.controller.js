const User = require("../models/user.model");
const EmployeeProfile = require("../models/employeeProfile.model");
const uploadFile = require("../services/storage.service");

async function employeeProfileController(req, res) {
  try {
    res.status(200).json({
      message: "Employee profile accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

// GET profile
async function getProfile(req, res) {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId)
      .select("name email profileImage isVerified role");

    const profile = await EmployeeProfile.findOne({ userId });

    res.json({
      user,
      profile
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

// UPDATE profile
async function updateProfile(req, res) {
  try {
    const userId = req.user.id;

    let profileImageUrl;
    let coverImageUrl;
    let certifications = [];
    let existingCertifications = [];

    // Upload profile image (if exists)
    if (req.files?.profileImage?.[0]) {

      const file = req.files.profileImage[0];

      // allowed image types
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
      ];

      // image validation
      if (!allowedTypes.includes(file.mimetype)) {
        return res.status(400).json({
          message: "Only JPG, PNG, and WEBP images are allowed"
        });
      }

      const result = await uploadFile(
        file.buffer,
        file.originalname,
        "/samarthya/profile-images"
      );

      profileImageUrl = result.url;
    }

    // Upload cover image (if exists)
    if (req.files?.coverImage?.[0]) {

      const file = req.files.coverImage[0];

      // allowed image types
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
      ];

      // image validation
      if (!allowedTypes.includes(file.mimetype)) {
        return res.status(400).json({
          message: "Only JPG, PNG, and WEBP images are allowed"
        });
      }

      const result = await uploadFile(
        file.buffer,
        file.originalname,
        "/samarthya/cover-images"
      );

      coverImageUrl = result.url;
    }


    const {
      name,
      phone,
      category,
      jobType,
      experience,
      gender,
      location,
      openToWork,
      about,
      skills,
      languages,
      professionalLinks,
      certificationTitles,
      existingCertificationUrls
    } = req.body;

    const parsedTitles = Array.isArray(certificationTitles)
      ? certificationTitles
      : certificationTitles
        ? [certificationTitles]
        : [];

    const parsedExistingUrls = Array.isArray(existingCertificationUrls)
      ? existingCertificationUrls
      : existingCertificationUrls
        ? [existingCertificationUrls]
        : [];


    // certifications upload
    if (req.files?.certifications) {

      for (const [index, file] of req.files.certifications.entries()) {

        const allowedTypes = [
          "image/jpeg",
          "image/png",
          "image/webp",
          "application/pdf"
        ];

        if (
          !allowedTypes.includes(
            file.mimetype
          )
        ) {

          return res.status(400).json({
            message:
              "Only JPG, PNG, WEBP and PDF files are allowed"
          });

        }

        const result = await uploadFile(

          file.buffer,

          file.originalname,

          "/samarthya/certifications"

        );

        

        certifications.push({
          title: parsedTitles[index] || file.originalname,
          fileUrl: result.url
        });

      }

    }


    // Update USERS collection
    await User.findByIdAndUpdate(userId, {
      name,
      ...(profileImageUrl && { profileImage: profileImageUrl })
    });

    // Parse skills safely
    const parsedSkills = Array.isArray(skills)
      ? skills
      : skills
        ? skills.split(",").map(s => s.trim())
        : [];

    const parsedLanguages = Array.isArray(languages)
      ? languages
      : languages
        ? languages.split(",").map(l => l.trim())
        : [];


    existingCertifications = parsedTitles
    .map((title, index) => ({

      title,

      fileUrl:
        parsedExistingUrls[index]

    }))

  .filter(cert => cert.fileUrl);

    let parsedProfessionalLinks = [];

    try {

      parsedProfessionalLinks =
        professionalLinks
          ? JSON.parse(professionalLinks)
          : [];

    } catch {

      parsedProfessionalLinks = [];

    }

    // Update EMPLOYEE PROFILE
    const updatedProfile = await EmployeeProfile.findOneAndUpdate(
      { userId },
      {
        phone,
        category,
        jobType,
        experience,
        gender,
        location,
        openToWork,
        about,
        skills: parsedSkills,
        languages: parsedLanguages,
        certifications: [
          ...existingCertifications,
          ...certifications
        ],
        professionalLinks: parsedProfessionalLinks,
        ...(coverImageUrl && { coverImage: coverImageUrl }),
      },
      { upsert: true, returnDocument: "after" }
    );

    res.json({
      message: "Profile updated successfully",
      profile: updatedProfile
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { employeeProfileController, getProfile, updateProfile };