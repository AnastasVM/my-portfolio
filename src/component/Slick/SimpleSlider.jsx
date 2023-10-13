import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";
import swimming from './image/plavanii.jpg';
import skiing from './image/лыжи.jpg';
import catamaran from "./image/сплавы1.jpeg";
import catamaran2 from "./image/сплавы2.jpeg";
import catamaran1 from "./image/сплавы3.jpg";
import travel3 from "./image/travel.jpg";
import travel from './image/семья.jpg';
import travel1 from './image/семья1.jpg';
import catamaran4 from "./image/сплавы.JPG";
import skiing1 from "./image/лыжи1.JPG";


const SimpleSlider = () => {
 
  var settings = {
    className: "center",
    centerMode: true,
    // точки внизу
    dots: false,
    infinite: true,
    speed: 500,
    //  сколько слайдев показывается сразу
    slidesToShow: 3,
     // сколько спри скролле прокручивается слайдов
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
  <>
  <div className="wrapper">
    <Slider {...settings}>
      <div className="slider__item">
          <h3 className="slider__title">Плавание</h3>
          <img src={swimming} alt="" className="slider__img"/>
      </div>
      <div className="slider__item">
        <h3 className="slider__title">Горные лыжи</h3>
        <img src={skiing} alt="" className="slider__img"/>
      </div>
      <div className="slider__item">
        <h3 className="slider__title">Сплавы на катамаранах</h3>
        <img src={catamaran} alt="" className="slider__img"/>
      </div>
      <div className="slider__item">
        <h3 className="slider__title">Сплавы на катамаранах</h3>
        <img src={catamaran1} alt="" className="slider__img"/>
      </div>
      <div className="slider__item">
        <h3 className="slider__title">Путешествия с семьей</h3>
        <img src={travel}  alt="" className="slider__img"/>
      </div>
      <div className="slider__item">
        <h3 className="slider__title">Путешествия с семьей</h3>
        <img src={travel1}  alt="" className="slider__img"/>
      </div>
      <div className="slider__item">
        <h3 className="slider__title">Сплавы на катамаранах</h3>
        <img src={catamaran2}  alt="" className="slider__img"/>
      </div>
      <div className="slider__item">
        <h3 className="slider__title">Путешествия с семьей</h3>
        <img src={travel3}  alt="" className="slider__img"/>
      </div>
      <div className="slider__item">
        <h3 className="slider__title">Сплавы на катамаранах</h3>
        <img src={catamaran4}  alt="" className="slider__img"/>
      </div>
      <div className="slider__item">
        <h3 className="slider__title">Горные лыжи</h3>
        <img src={skiing1}  alt="" className="slider__img"/>
      </div>
    </Slider>
    </div>
  </>
  )
}

export default SimpleSlider;