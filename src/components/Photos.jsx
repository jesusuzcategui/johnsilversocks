import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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
              <img src={item.imagen} alt={"Image " + i} />
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
