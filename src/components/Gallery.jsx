import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from '../styles/Gallery.css';
import { Link } from "react-router-dom";

const Gallery = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  let SliderItems = images.map( (item, i) => {
      return (
          <div className={"Gallery__item"} key={i}>
              <img className={style.Gallery__image} src={item.imagen} alt={"Image " + i} />
              <Link className={"Gallery__btn"} to={item.url}>Comprar</Link>
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

export default Gallery;
