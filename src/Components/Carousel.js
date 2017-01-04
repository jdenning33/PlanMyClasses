import React from 'react';
import style from '../style'
import Slider from 'react-slick'

const Carousel = (
  { elements,
    afterChange} ) =>
{
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    accessiblity: true,
    centerMode:true,
    focusOnSelect: true,
    afterChange: (e) => afterChange(e),
  };
  let i = 0;
  return (
    <Slider {...settings}>
      {elements.map( (element) => {
        return (
          element
        )
      })}
    </Slider>
  );
}

export default Carousel
