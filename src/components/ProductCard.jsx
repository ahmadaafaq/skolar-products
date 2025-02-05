import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProductCard = (props) => {
  const cardData = props.data;

  function TextWithInnerHTML({ text }) {
    return (
      <div dangerouslySetInnerHTML={{ __html: text.replace(/<br>/g, '<br/>') }} />
    );
  }

  return (
    <div className="shadow-md transition-all hover:shadow-lg rounded-lg overflow-hidden bg-white">
      <div className="serviceCard">
        <img
          src={cardData.src}
          alt={cardData.title}
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      <div className="px-5 py-4">
        <h2 className="font-bold uppercase text-md md:text-lg mb-3">
          {cardData.title}
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          <TextWithInnerHTML text={cardData.description} />
        </p>

        <Link to="/">
          <button className="w-full flex items-center justify-center px-5 py-2 text-sm md:text-base font-medium  border border-blue-200 rounded-md gap-2 tracking-wider hover:gap-3 hover:bg-blue-50 hover:border-blue-300 transition-all">
            Explore <IoIosArrowRoundForward size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
