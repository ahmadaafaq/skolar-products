import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiLocationArrow1 } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    mobile: "",
  });

  const message = "Hello";

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "This field is required.";
    if (!formData.lastName) newErrors.lastName = "This field is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    if (!formData.message) newErrors.message = "This field is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      toast.info("Submitting...");
      emailjs
        .send(
          "service_cael2o7",
          "template_zmn495m",
          {
            to_name: "Support Team",
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            mobile: formData.mobile,
            first_name: formData.firstName,
            last_name: formData.lastName,
            message: formData.message,
          },
          "4-Yb5f8dP0hWqLsU0"
        )
        .then(
          () => {
            toast.success("Email sent successfully!");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              message: "",
              mobile: "",
            });
            setErrors({});
          },
          (error) => {
            console.error("Failed to send email:", error);
            toast.error("Failed to send email.");
          }
        )
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="relative min-h-screen py-6 sm:py-12 ">
      <div className="container mx-auto w-full px-4">
        <p className="mb-4 text-lg font-semibold tracking-wider border-l-2 pl-2 w-max border-blue-400">
          Contact Us
        </p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 bg-white shadow-md p-6 rounded-lg">
          {/* Contact Info Section */}
          <div className="lg:w-1/2 flex flex-col gap-6 p-6 bg-[aliceblue] rounded-md">
            <h2 className="font-normal relative text-xl text-gray-700 after:absolute after:content-[''] after:h-3 after:-bottom-2 after:border-b-[3px] after:-skew-y-3 after:border-blue-600 after:w-12 after:left-1">
              We're open for any suggestions or just to have a chat.
            </h2>

            <div className="flex gap-4 items-center py-4 border-b border-blue-100">
              <div className="border border-gray-400 p-2 rounded-full text-xl lg-text-2xl">
                <CiLocationArrow1 />
              </div>
              <span className="text-gray-600 text-sm lg:text-lg">
                Address: A-3, Ground Floor, <br /> Madhu Vihar, Delhi - 110092
              </span>
            </div>

            <div className="flex gap-4 items-center py-4 border-b border-blue-100">
              <div className="border border-gray-400 p-2 rounded-full text-xl lg-text-2x">
                <PiPhoneThin />
              </div>
              <a href="tel:9911200588" className="text-gray-600 lg:text-lg">
                Phone: +91 9911200588
              </a>
            </div>

            <div className="flex gap-4 items-center py-4 border-b border-blue-100">
              <div className="border border-gray-400 p-2 rounded-full text-xl lg-text-2x">
                <SiMinutemailer />
              </div>
              <span className="text-gray-600 lg:text-lg">
                support@theskorlar.com
              </span>
            </div>

            <div className="flex gap-6 lg:text-3xl text-3xl text-white pt-6">
              <Link to="https://www.instagram.com/skolarmarketingteam/" target="_blank">
                <FaInstagram className="bg-black p-[7px] lg:p-[7px] rounded-full hover:bg-gradient-to-tl hover:from-yellow-300 hover:via-pink-500 hover:to-purple-500 transition" />
              </Link>
              <Link to="https://x.com/SkolarTeam" target="_blank">
                <RiTwitterXFill className="bg-black p-[7px] lg:p-[7px] rounded-full hover:bg-blue-500 transition" />
              </Link>
              <Link to="https://www.linkedin.com/in/skolar-marketing-team-aba08034b/" target="_blank">
                <CiLinkedin className="bg-black p-[7px] lg:p-[7px] rounded-full hover:bg-blue-700 transition" />
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=61572904312362" target="_blank">
                <FaFacebook className="bg-black p-[7px] lg:p-[7px] rounded-full hover:bg-blue-500 transition" />
              </Link>
              <Link to={`https://wa.me/9911200588?text=${encodeURIComponent(message)}`} target="_blank">
                <FaWhatsapp className="bg-black p-[7px] lg:p-[7px] rounded-full hover:bg-green-500 transition" />
              </Link>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2 lg:py-5 flex  flex-col justify-center lg:h-full lg:gap-12">
            <h2 className="font-bold text-2xl mb-16 relative  text-blue-900  lg:mb-10 after:absolute after:content-[''] after:h-3 after:-bottom-2 after:border-b-[3px] after:-skew-y-3 after:border-blue-800 after:w-10 after:left-1">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col mb-3">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
                    disabled={loading}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
                    disabled={loading}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                <div className="flex flex-col mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
                    disabled={loading}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
                    disabled={loading}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message Here"
                  className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                  rows="3"
                  disabled={loading}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
                  disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactUs;
