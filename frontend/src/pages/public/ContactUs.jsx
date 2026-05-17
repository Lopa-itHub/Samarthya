import React, { useState } from "react";

import axios from "axios";

const ContactUs = () => {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    userType: "Employee",
    issueType: "General",
    message: "",

  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(

        "http://localhost:3000/api/contact/send",

        formData,

        {
          withCredentials: true,
        }

      );

      if (response.data.success) {

        alert("Message sent successfully");

        setFormData({

          name: "",
          email: "",
          userType: "Employee",
          issueType: "General",
          message: "",

        });

      }

    } catch (error) {

      console.log(error);

      alert("Failed to send message");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="bg-gray-50 py-14 px-5 min-h-screen">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">

        {/* HEADING */}

        <h1 className="text-4xl font-extrabold text-slate-800 mb-3">

          Contact Us

        </h1>

        <p className="text-slate-500 mb-8">

          Have questions, complaints or support issues?
          Send us a message and our admin team will review it.

        </p>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* NAME */}

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
            w-full
            border border-slate-300
            p-3 rounded-xl
            outline-none
            focus:ring-2 focus:ring-cyan-500
          "
          />

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
            w-full
            border border-slate-300
            p-3 rounded-xl
            outline-none
            focus:ring-2 focus:ring-cyan-500
          "
          />

          {/* USER TYPE */}

          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="
            w-full
            border border-slate-300
            p-3 rounded-xl
            outline-none
            focus:ring-2 focus:ring-cyan-500
          "
          >

            <option value="Employee">
              Employee
            </option>

            <option value="Employer">
              Employer
            </option>

          </select>

          {/* ISSUE TYPE */}

          <select
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            className="
            w-full
            border border-slate-300
            p-3 rounded-xl
            outline-none
            focus:ring-2 focus:ring-cyan-500
          "
          >

            <option value="General">
              General
            </option>

            <option value="Account problem">
              Account problem
            </option>

            <option value="Job related">
              Job related
            </option>

            <option value="Report user">
              Report user
            </option>

            <option value="Technical issue">
              Technical issue
            </option>

          </select>

          {/* MESSAGE */}

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="
            w-full
            border border-slate-300
            p-3 rounded-xl
            outline-none
            resize-none
            focus:ring-2 focus:ring-cyan-500
          "
          />

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
            bg-cyan-600
            hover:bg-cyan-700
            text-white
            px-7 py-3
            rounded-xl
            font-medium
            transition
          "
          >

            {
              loading
                ? "Sending..."
                : "Send Message"
            }

          </button>

        </form>

      </div>

    </div>

  );

};

export default ContactUs;