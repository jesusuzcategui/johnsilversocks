import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"


const Photos = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };


  let SliderItems = images.map( (item, i) => {
      return (
          <div className={"Photos__item"} key={i}>
              <Link to={"/product/" + item._id}>
                <img src={item.image} alt={"Image " + i} /> 
              </Link> 
          </div>
      );
  } );
  return (
    <React.Fragment>
      <div>
        <Slider {...settings}>
          {SliderItems}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Photos;
