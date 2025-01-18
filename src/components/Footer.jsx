import React from "react";

const Footer = () => {
  const cur_year = new Date().getFullYear();

  return (
    <section className=" bg-black text-center py-3">
      <div className="text-white text-sm">
        Copyright © <span>{cur_year}</span>. All Rights Reserved By
        <a
          href="#home"
          className="text-blue-500 ml-2 uppercase hover:underline">
          Theskorlar
        </a>
      </div>
    </section>
  );
};

export default Footer;
