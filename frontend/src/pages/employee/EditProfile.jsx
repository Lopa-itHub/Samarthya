import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";

import {
  DEFAULT_PROFILE_IMAGE,
  DEFAULT_COVER_IMAGE
} from "../../constants/defaultImages";

const EditProfile = () => {

  const navigate = useNavigate();

  const jobOptions = [

    // =========================
    // HIGH SKILL
    // =========================

    {
      value: "Software Engineer",
      label: "Software Engineer",
      category: "high"
    },
    {
      value: "Frontend Developer",
      label: "Frontend Developer",
      category: "high"
    },
    {
      value: "Backend Developer",
      label: "Backend Developer",
      category: "high"
    },
    {
      value: "Full Stack Developer",
      label: "Full Stack Developer",
      category: "high"
    },
    {
      value: "Mobile App Developer",
      label: "Mobile App Developer",
      category: "high"
    },
    {
      value: "UI/UX Designer",
      label: "UI/UX Designer",
      category: "high"
    },
    {
      value: "Graphic Designer",
      label: "Graphic Designer",
      category: "high"
    },
    {
      value: "Data Scientist",
      label: "Data Scientist",
      category: "high"
    },
    {
      value: "Cybersecurity Analyst",
      label: "Cybersecurity Analyst",
      category: "high"
    },
    {
      value: "Cloud Engineer",
      label: "Cloud Engineer",
      category: "high"
    },
    {
      value: "AI/ML Engineer",
      label: "AI/ML Engineer",
      category: "high"
    },
    {
      value: "Blockchain Developer",
      label: "Blockchain Developer",
      category: "high"
    },
    {
      value: "DevOps Engineer",
      label: "DevOps Engineer",
      category: "high"
    },
    {
      value: "Doctor",
      label: "Doctor",
      category: "high"
    },
    {
      value: "Nurse",
      label: "Nurse",
      category: "high"
    },
    {
      value: "Pharmacist",
      label: "Pharmacist",
      category: "high"
    },
    {
      value: "Lawyer",
      label: "Lawyer",
      category: "high"
    },
    {
      value: "Chartered Accountant",
      label: "Chartered Accountant",
      category: "high"
    },
    {
      value: "Architect",
      label: "Architect",
      category: "high"
    },
    {
      value: "Professor",
      label: "Professor",
      category: "high"
    },
    {
      value: "Teacher",
      label: "Teacher",
      category: "high"
    },

    // =========================
    // MEDIUM SKILL
    // =========================

    {
      value: "Photographer",
      label: "Photographer",
      category: "medium"
    },
    {
      value: "Videographer",
      label: "Videographer",
      category: "medium"
    },
    {
      value: "Video Editor",
      label: "Video Editor",
      category: "medium"
    },
    {
      value: "Photo Editor",
      label: "Photo Editor",
      category: "medium"
    },
    {
      value: "Makeup Artist",
      label: "Makeup Artist",
      category: "medium"
    },
    {
      value: "Hair Stylist",
      label: "Hair Stylist",
      category: "medium"
    },
    {
      value: "Chef",
      label: "Chef",
      category: "medium"
    },
    {
      value: "Baker",
      label: "Baker",
      category: "medium"
    },
    {
      value: "Electrician",
      label: "Electrician",
      category: "medium"
    },
    {
      value: "Plumber",
      label: "Plumber",
      category: "medium"
    },
    {
      value: "Mechanic",
      label: "Mechanic",
      category: "medium"
    },
    {
      value: "Carpenter",
      label: "Carpenter",
      category: "medium"
    },
    {
      value: "Tailor",
      label: "Tailor",
      category: "medium"
    },
    {
      value: "Fashion Designer",
      label: "Fashion Designer",
      category: "medium"
    },
    {
      value: "Fitness Trainer",
      label: "Fitness Trainer",
      category: "medium"
    },
    {
      value: "Yoga Instructor",
      label: "Yoga Instructor",
      category: "medium"
    },
    {
      value: "Driver",
      label: "Driver",
      category: "medium"
    },
    {
      value: "Travel Guide",
      label: "Travel Guide",
      category: "medium"
    },
    {
      value: "Sales Executive",
      label: "Sales Executive",
      category: "medium"
    },
    {
      value: "Customer Support Executive",
      label: "Customer Support Executive",
      category: "medium"
    },

    // =========================
    // LOW SKILL
    // =========================

    {
      value: "Cleaner",
      label: "Cleaner",
      category: "low"
    },
    {
      value: "Helper",
      label: "Helper",
      category: "low"
    },
    {
      value: "Delivery person",
      label: "Delivery person",
      category: "low"
    },
    {
      value: "Security Guard",
      label: "Security Guard",
      category: "low"
    },
    {
      value: "Housekeeping Staff",
      label: "Housekeeping Staff",
      category: "low"
    },
    {
      value: "Office Boy",
      label: "Office Boy",
      category: "low"
    },
    {
      value: "Warehouse Worker",
      label: "Warehouse Worker",
      category: "low"
    },
    {
      value: "Construction Worker",
      label: "Construction Worker",
      category: "low"
    },
    {
      value: "Factory Worker",
      label: "Factory Worker",
      category: "low"
    },
    {
      value: "Packing Staff",
      label: "Packing Staff",
      category: "low"
    },
    {
      value: "Gardener",
      label: "Gardener",
      category: "low"
    },
    {
      value: "Cook Assistant",
      label: "Cook Assistant",
      category: "low"
    }

  ];

  const skillOptions = [

    // TECH
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Express.js", label: "Express.js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "SQL", label: "SQL" },
    { value: "Java", label: "Java" },
    { value: "Python", label: "Python" },
    { value: "C++", label: "C++" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Figma", label: "Figma" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Cloud Computing", label: "Cloud Computing" },

    // CREATIVE
    { value: "Photography", label: "Photography" },
    { value: "Videography", label: "Videography" },
    { value: "Video Editing", label: "Video Editing" },
    { value: "Photo Editing", label: "Photo Editing" },
    { value: "Editing", label: "Editing" },
    { value: "Makeup", label: "Makeup" },
    { value: "Fashion Styling", label: "Fashion Styling" },
    { value: "Content Writing", label: "Content Writing" },
    { value: "Copywriting", label: "Copywriting" },
    { value: "Social Media Management", label: "Social Media Management" },

    // TRADE / SERVICE
    { value: "Electrician Work", label: "Electrician Work" },
    { value: "Plumbing", label: "Plumbing" },
    { value: "Carpentry", label: "Carpentry" },
    { value: "Mechanic Work", label: "Mechanic Work" },
    { value: "Driving", label: "Driving" },
    { value: "Cooking", label: "Cooking" },
    { value: "Baking", label: "Baking" },
    { value: "Cleaning", label: "Cleaning" },
    { value: "Housekeeping", label: "Housekeeping" },

    // FITNESS / HEALTH
    { value: "Fitness Training", label: "Fitness Training" },
    { value: "Yoga", label: "Yoga" },
    { value: "Nutrition Guidance", label: "Nutrition Guidance" },
    { value: "First Aid", label: "First Aid" },

    // BUSINESS / OFFICE
    { value: "Microsoft Excel", label: "Microsoft Excel" },
    { value: "Data Entry", label: "Data Entry" },
    { value: "Communication", label: "Communication" },
    { value: "Customer Service", label: "Customer Service" },
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Project Management", label: "Project Management" },

  ];

  const languageOptions = [

    // INDIAN LANGUAGES
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Odia", label: "Odia" },
    { value: "Bengali", label: "Bengali" },
    { value: "Tamil", label: "Tamil" },
    { value: "Telugu", label: "Telugu" },
    { value: "Malayalam", label: "Malayalam" },
    { value: "Kannada", label: "Kannada" },
    { value: "Punjabi", label: "Punjabi" },
    { value: "Marathi", label: "Marathi" },
    { value: "Gujarati", label: "Gujarati" },
    { value: "Urdu", label: "Urdu" },
    { value: "Assamese", label: "Assamese" },
    { value: "Kashmiri", label: "Kashmiri" },
    { value: "Sanskrit", label: "Sanskrit" },

    // FOREIGN LANGUAGES
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" },
    { value: "German", label: "German" },
    { value: "Japanese", label: "Japanese" },
    { value: "Korean", label: "Korean" },
    { value: "Chinese", label: "Chinese" },
    { value: "Russian", label: "Russian" },
    { value: "Italian", label: "Italian" },
    { value: "Portuguese", label: "Portuguese" },
    { value: "Arabic", label: "Arabic" },
    { value: "Turkish", label: "Turkish" },
    { value: "Dutch", label: "Dutch" },
    { value: "Greek", label: "Greek" },
    { value: "Thai", label: "Thai" },

    // SIGN LANGUAGES
    { value: "Indian Sign Language", label: "Indian Sign Language" },
    { value: "American Sign Language", label: "American Sign Language" },
    { value: "British Sign Language", label: "British Sign Language" }

  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    experience: "",
    gender: "",
    jobType: "",
    location: "",
    openToWork: false,
    about: "",
    skills: [],
    languages: [],
  });

  const [profilePreview, setProfilePreview] = useState("");
  const [coverPreview, setCoverPreview] = useState("");
  const [profileFile, setProfileFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [certifications, setCertifications] = useState([]);
  const [professionalLinks, setProfessionalLinks] = useState([]);

  const [loading, setLoading] = useState(true);

  // 🔹 Fetch data
  useEffect(() => {
    axios.get('http://localhost:3000/api/employee/profile-data', {
      withCredentials: true
    })
      .then((res) => {
        const { user, profile } = res.data;

        setForm({
          name: user.name || "",
          phone: profile?.phone || "",
          category: profile?.category || "",
          jobType: profile?.jobType || "",
          experience: profile?.experience || "",
          gender: profile?.gender || "",
          location: profile?.location || "",
          openToWork: profile?.openToWork || false,
          about: profile?.about || "",
          skills: profile?.skills || [],
          languages: profile?.languages || [],
        });

        setProfilePreview(user.profileImage || "");
        setCoverPreview(profile?.coverImage || "");

        setCertifications(
          profile?.certifications || []
        );

        setProfessionalLinks(
          profile?.professionalLinks || []
        );

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  //  Handle input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm(prev => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value
    }));
  };

  //  File handlers
  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    setProfileFile(file);
    setProfilePreview(URL.createObjectURL(file));
  };


  const handleCoverImage = (e) => {
    const file = e.target.files[0];
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  };


  const addCertification = () => {

    setCertifications(prev => [
      ...prev,
      {
        title: "",
        file: null
      }
    ]);

  };

  const removeCertification = (index) => {

    setCertifications(prev =>
      prev.filter((_, i) => i !== index)
    );

  };

  const updateCertification = (
    index,
    field,
    value
  ) => {

    const updated = [...certifications];

    updated[index][field] = value;

    setCertifications(updated);

  };

  const addProfessionalLink = () => {

    setProfessionalLinks(prev => [
      ...prev,
      {
        title: "",
        url: ""
      }
    ]);

  };

  const removeProfessionalLink = (index) => {

    setProfessionalLinks(prev =>
      prev.filter((_, i) => i !== index)
    );

  };

  const updateProfessionalLink = (
    index,
    field,
    value
  ) => {

    const updated = [...professionalLinks];

    updated[index][field] = value;

    setProfessionalLinks(updated);

  };

  //  Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach(key => {

      if (key === "skills") {

        form.skills.forEach(skill => {
          formData.append("skills", skill);
        });

      }

      else if (key === "languages") {

        form.languages.forEach(language => {
          formData.append("languages", language);
        });

      }

      else {

        formData.append(key, form[key]);

      }

    });

    if (profileFile) formData.append("profileImage", profileFile);
    if (coverFile) formData.append("coverImage", coverFile);


    certifications.forEach(cert => {

      formData.append(
        "certificationTitles",
        cert.title
      );

      // existing uploaded certification
      if (cert.fileUrl) {

        formData.append(
          "existingCertificationUrls",
          cert.fileUrl
        );

      }

      // newly uploaded file
      if (cert.file) {

        formData.append(
          "certifications",
          cert.file
        );

      }

    });

    formData.append(
      "professionalLinks",
      JSON.stringify(professionalLinks)
    );

    try {
      await axios.put(
        'http://localhost:3000/api/employee/profile-data',
        formData,
        { withCredentials: true }
      );

      toast.success("Profile updated successfully!", {
        position: "top-right",
        autoClose: 1500,
      });

      setTimeout(() => {
        navigate("/employee/profile");
      }, 2000);

    } catch (err) {
      console.log(err);
      alert("Error updating profile");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;


  return (
    <div className="flex justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-6"
      >

        <h2 className="text-3xl font-bold text-center text-cyan-700">
          Edit Profile
        </h2>

        {/* 🔹 PROFILE IMAGE */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={profilePreview || DEFAULT_PROFILE_IMAGE}
            className="w-24 h-24 rounded-full object-cover border"
          />
          <label className="cursor-pointer bg-cyan-600 text-white px-4 py-2 rounded-lg">
            Upload Profile Image
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              onChange={(e) => {
                handleProfileImage(e);
                console.log(e.target.files[0]?.name);
              }}
              className="hidden"
            />
          </label>

          {profileFile && (
            <p className="text-sm text-gray-500 mt-1">
              {profileFile.name}
            </p>
          )}
        </div>

        {/* 🔹 COVER IMAGE */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Cover Image</label>
          <img src={coverPreview || DEFAULT_COVER_IMAGE} className="h-32 w-full object-cover rounded-lg" />
          <label className="cursor-pointer border-2 border-dashed p-4 text-center rounded-lg hover:bg-gray-50">
            Upload Cover Image
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              onChange={handleCoverImage}
              className="hidden"
            />
          </label>
        </div>

        {/* 🔹 BASIC INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label>Phone</label>
            <input
            type='tel'
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label>Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label>Gender</label>

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="input"
            >

              <option value="">Select Gender</option>

              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
              <option value="other">Other</option>

            </select>
          </div>

        </div>

        {/* 🔹 JOB */}
        <div className="grid grid-cols-1 gap-4">
          <label>Select Job type</label>
          <Select
            options={jobOptions}
            value={
              jobOptions.find(
                job => job.value === form.jobType
              )
            }

            onChange={(selected) => {

              setForm(prev => ({
                ...prev,

                jobType: selected?.value || "",

                category: selected?.category || ""
              }));

            }}

            placeholder="Search or select job type..."
          />

        </div>

        {/* 🔹 SWITCH */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="openToWork"
            checked={form.openToWork}
            onChange={handleChange}
          />
          Open to Work
        </label>


        {/* 🔹 SKILLS */}
        <div className='flex flex-col gap-0.5'>
          <label>Select skills</label>
          <Select
            isMulti
            options={skillOptions}
            value={skillOptions.filter(opt => form.skills.includes(opt.value))}
            onChange={(selected) => {
              setForm(prev => ({
                ...prev,
                skills: (selected || []).map(s => s.value)
              }));
            }}
          />
        </div>

        <div className='flex flex-col gap-0.5'>

          <label>Languages</label>

          <Select
            isMulti

            options={languageOptions}

            value={
              languageOptions.filter(
                opt => form.languages.includes(opt.value)
              )
            }

            onChange={(selected) => {

              setForm(prev => ({
                ...prev,

                languages: (selected || []).map(l => l.value)
              }));

            }}
          />

        </div>

        <div>
          <label>Experience</label>

          <select
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="input"
          >

            <option value="">Select Experience (in years)</option>

            <option value="0-1 years">0-1 years</option>
            <option value="1-2 years">1-2 years</option>
            <option value="2-5 years">2-5 years</option>
            <option value="5-10 years">5-10 years</option>
            <option value="10+ years">10+ years</option>

          </select>
        </div>


        <div className="flex flex-col gap-4">

          <div className="flex items-center justify-between">

            <label className="font-medium">
              Certifications / Licenses
            </label>

            <button
              type="button"

              onClick={addCertification}

              className="
                bg-cyan-600 text-white
                px-3 py-1 rounded-lg
              "
            >
              + Add
            </button>

          </div>

          {/* empty state */}
          {certifications.length === 0 && (
            <p className="text-sm text-gray-500">
              No certifications added yet
            </p>
          )}

          {certifications.map((cert, index) => (

            <div
              key={index}

              className="
                border rounded-xl
                p-4 flex flex-col gap-3
              "
            >

              <input
                type="text"

                placeholder="Certification name"

                value={cert.title}

                onChange={(e) =>
                  updateCertification(
                    index,
                    "title",
                    e.target.value
                  )
                }

                className="input"
              />

              {/* upload certifications/licenses */}

              <div className="flex flex-col gap-2">

                <label
                  className="
                    cursor-pointer
                    border-2 border-dashed
                    border-cyan-300
                    rounded-xl
                    p-4
                    text-center
                    hover:bg-cyan-50
                    transition
                    text-sm
                    text-gray-600
                  "
                >

                  {cert.file
                    ? cert.file.name
                    : "Upload certificate or license"}

                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp,.pdf"

                    onChange={(e) =>
                      updateCertification(
                        index,
                        "file",
                        e.target.files[0]
                      )
                    }

                    className="hidden"
                  />

                </label>

                {cert.fileUrl && (
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-700 underline text-sm"
                  >
                    View Uploaded File
                  </a>
                )}

              </div>

              {/* selected new file */}
              {cert.file && (
                <p className="text-sm text-gray-500">
                  {cert.file.name}
                </p>
              )}

              {/* already uploaded file */}
              {cert.fileUrl && (
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-700 underline text-sm"
                >
                  View Uploaded File
                </a>
              )}

              <button
                type="button"

                onClick={() =>
                  removeCertification(index)
                }

                className="
                  text-red-500 text-sm
                  self-start
                "
              >
                Remove
              </button>

            </div>

          ))}

        </div>


        <div className="flex flex-col gap-4">

          <div className="flex items-center justify-between">

            <label className="font-medium">
              Professional Links
            </label>

            <button
              type="button"

              onClick={addProfessionalLink}

              className="
                bg-cyan-600 text-white
                px-3 py-1 rounded-lg
              "
            >
              + Add
            </button>

          </div>

          {professionalLinks.length === 0 && (
            <p className="text-sm text-gray-500">
              No professional links added yet
            </p>
          )}

          {professionalLinks.map((link, index) => (

            <div
              key={index}

              className="
                border rounded-xl
                p-4 flex flex-col gap-3
              "
            >

              <input
                type="text"

                placeholder="Link title (GitHub, Portfolio...)"

                value={link.title}

                onChange={(e) =>
                  updateProfessionalLink(
                    index,
                    "title",
                    e.target.value
                  )
                }

                className="input"
              />

              <input
                type="url"

                placeholder="https://..."

                value={link.url}

                onChange={(e) =>
                  updateProfessionalLink(
                    index,
                    "url",
                    e.target.value
                  )
                }

                className="input"
              />

              <button
                type="button"

                onClick={() =>
                  removeProfessionalLink(index)
                }

                className="
                  text-red-500 text-sm
                  self-start
                "
              >
                Remove
              </button>

            </div>

          ))}

        </div>



        {/* 🔹 ABOUT */}
        <textarea
          name="about"
          value={form.about}
          onChange={handleChange}
          placeholder="About you..."
          className="input h-24"
        />

        {/* 🔹 BUTTON */}
        <button className="bg-cyan-600 hover:bg-cyan-800 text-white py-3 rounded-xl text-lg">
          Save Changes
        </button>

      </form>

      {/* 🔹 Tailwind helper */}
      <style>{`
        .input {
          width: 100%;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
          outline: none;
        }
        .input:focus {
          border-color: #06b6d4;
        }
      `}</style>
    </div>
  );
};

export default EditProfile;