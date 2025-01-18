import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/roWater.png";
import image2 from "../assets/Tracking.png";
import image3 from "../assets/Navigation.png";

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    horizontal: true,
  };

  const slides = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
  ];

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.title} className="slide-image " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
