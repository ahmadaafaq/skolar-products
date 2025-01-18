import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiHomeSmileLine } from "react-icons/ri";
import { TbSettingsCode } from "react-icons/tb";
import { CiFileOn } from "react-icons/ci";
import { RiContactsBookLine } from "react-icons/ri";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/skolar-logo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-[90%] m-auto">
      {/* Navbar Container */}
      <div className="flex mt-6 items-center justify-between relative">
        {/* Logo */}
        <div className="logo mb-6">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="Logo" className="w-[80px] lg:w-[120px]" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden text-xl cursor-pointer "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Backdrop Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm  h-screen"
            onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen
              ? "flex py-5 bg-[aliceblue] px-2  h-[80vh]"
              : "hidden"
          } lg:flex flex-col lg:flex-row gap-2 absolute lg:static top-[80px] left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none  lg:z-auto`}>
          {[
            {
              id: "home",
              label: "Home",
              icon: <RiHomeSmileLine className="text-md" />,
            },
            {
              id: "products",
              label: "Products",
              icon: <TbSettingsCode className="text-md" />,
              dropdown: true,
            },
            {
              id: "aboutUs",
              label: "About Us",
              icon: <CiFileOn className="text-md" />,
            },
            {
              id: "contactUs",
              label: "Contact",
              icon: <RiContactsBookLine className="text-md" />,
            },
          ].map((item) => (
            <div
              key={item.id}
              className="relative flex items-center"
              onMouseEnter={() => item.dropdown && setShowDropdown(true)}
              onMouseLeave={() => item.dropdown && setShowDropdown(false)}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`flex items-center w-full px-4 py-[8px] ${
                  active === item.id ? "text-blue-500" : "text-slate-400"
                } text-md capitalize hover:text-slate-700 transition-all ease-in font-mono flex items-center gap-2 cursor-pointer`}
                onSetActive={() => setActive(item.id)}>
                <span
                  className={`text-lg ${
                    active === item.id ? "text-blue-500 " : "text-slate-400"
                  }`}>
                  {item.icon}
                </span>
                {item.label}
                {item.dropdown &&
                  (showDropdown ? <MdExpandLess /> : <MdExpandMore />)}
              </Link>

              {/* Dropdown for Products */}
              {item.dropdown && showDropdown && (
                <div className="absolute top-full left-3 shadow-lg w-[150px] bg-white z-30">
                  {["GPS", "RO", "CCTV"].map((product) => (
                    <Link
                      key={product}
                      to="/products"
                      className="block px-4 py-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all cursor-pointer"
                      onClick={() => {
                        setActive("products");
                        setShowDropdown(false);
                        setIsMobileMenuOpen(false);
                      }}>
                      {product}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
