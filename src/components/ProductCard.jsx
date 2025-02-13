import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import './DescriptionCard.css';

const ProductCard = (props) => {
  const cardData = props.data;

  function TextWithInnerHTML({ text }) {
     const formattedDescription = text.replace(/<br>/g, '<br/>');
       // Split the description by <br> tags (handles both <br> and <br/>)
  const lines = text.split(/<br\s*\/?>/);
  const header = lines.shift(); // Extracts the first line
  const body = lines.join('<br/>');
    return (
      // <div dangerouslySetInnerHTML={{ __html: text.replace(/<br>/g, '<br/>') }} />
      <>
      <div className="description-card">
      <div 
        className="description-header" 
        dangerouslySetInnerHTML={{ __html: header }} 
      />
      <div 
        className="description-body" 
        dangerouslySetInnerHTML={{ __html: body }} 
      />
    </div>
    </>
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

      <div className="px-4 py-2">
        <h2 className="font-bold uppercase text-md mb-2 mt-5 md:text-2xl">
          {cardData.title}
        </h2>
        <p className="text-sm md:text-base text-gray-200 mb-7">
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
