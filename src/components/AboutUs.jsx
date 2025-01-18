import React from "react";
import About from "../assets/About.png";

const AboutUs = () => {
  return (
    <section className="container mx-auto min-h-[80vh] py-8 px-4 sm:px-6 lg:px-8 about_us">
      {/* Section Title */}
      <p className="mb-6 text-lg font-semibold tracking-wider border-l-4 pl-3 border-blue-400">
        About Us
      </p>

      {/* Content Wrapper */}
      <div className="grid gap-10 lg:grid-cols-2 items-center bg-white rounded-md shadow-md p-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={About}
            alt="About Us Illustration"
            className="w-full max-w-sm lg:max-w-full"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-xl md:text-4xl font-semibold text-blue-500 mb-6">
            What We Do?
          </h2>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-6">
            Welcome to our one-stop destination for{" "}
            <b>purity, precision, and protection</b>! At{" "}
            <span className="text-blue-500 text-sm font-semibold">
              Theskorlar
            </span>
            , we specialize in delivering top-notch solutions to make your life
            safer, healthier, and more connected.
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-sm md:text-lg space-y-4">
            <li>
              <b>Purify Your Life:</b> Advanced RO purifiers for clean and
              healthy drinking water.
            </li>
            <li>
              <b>Stay on Track:</b> Cutting-edge GPS trackers to monitor assets
              and loved ones.
            </li>
            <li>
              <b>Feel Secure:</b> State-of-the-art CCTV systems for 24/7 safety.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
