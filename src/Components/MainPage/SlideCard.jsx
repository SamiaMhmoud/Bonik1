import React from "react";
import Sdata from "./Sdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Sdata.map((el, idx) => (
          <div className="box d_flex"key={idx}>
            <div className="slider-text left">
              <h1>{el.title}</h1>
              <p>{el.desc}</p>
              <button className="main-btn">Visit Collections</button>
            </div>
            <div className="cover right">
              <img src={el.cover} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideCard;
