import React, { useMemo } from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroSlider from "./HeroSlidder";
import AboutUs from "./AboutUs";
import Products from "./Products";
import ContactUs from "./ContactUs";

const Home = () => {
  const typewriterComponent = useMemo(
    () => (
      <Typewriter
        words={["Purifier Expert", "Security Provider", "Tracking Specialist"]}
        loop={false}
        cursor
        cursorStyle="_"
        typeSpeed={150}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    ),
    []
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="flex ">
        <div className="grid grid-cols-1 md:grid-cols-2  md:items-center md:h-[90vh] mt-52 md:mt-20 container mx-auto px-4 md:px-8">
          {/* Text Content */}
          <div className=" md:text-left mb-8 md:mb-0 px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-5">
              Greetings, I'm <br /> your
              <span className="text-blue-400 text-2xl md:text-4xl font-bold uppercase">
                {" "}
                {typewriterComponent}
              </span>
            </h1>
            <p className="text-zinc-500 font-Raleway tracking-wide text-sm md:text-md w-full md:w-[85%] mx-auto md:mx-0">
              Purify your water with RO systems, track efficiently with GPS
              devices, and secure your surroundings with advanced CCTV cameras.
              Reliable solutions for health, navigation, and safety in one
              place!
            </p>
            <div className="flex items-center  md:justify-start mt-5">
              <button
                onClick={() => {
                  const element = document.getElementById("contactUs");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border border-black px-6 py-2 rounded-sm hover:bg-slate-100 transition">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative">
            <HeroSlider />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider shadow-sm w-full h-[1px] bg-slate-100 my-10 md:my-20"></div>

      {/* Products Section */}
      <div className="relative px-4 md:px-8" id="products">
        <Products />
      </div>

      {/* Divider */}
      <div className="divider shadow-sm w-full h-[1px] bg-slate-100 my-10 md:my-20"></div>

      {/* About Us Section */}
      <div className="px-4 md:px-8" id="aboutUs">
        <AboutUs />
      </div>

      {/* Divider */}
      <div className="divider shadow-sm w-full h-[1px] bg-slate-100 my-10 md:my-20"></div>

      {/* Contact Us Section */}
      <div className="px-4 md:px-8" id="contactUs">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
