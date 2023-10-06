import Slider from "react-slick";

import "./slick.css"; 
import "./slick-theme.css";

import active from "./image/Mogo.png";
// import mogo from "./image/ActiveBox.png";


export const SimpleSlider = ({ ...props}) => {
   
        const settings = {
            // точки внизу
          dots: true,
        //   бесконечная прокрутка
          infinite: true,
        //   speed: 500,
        //   сколько слайдев показывается сразу
          slidesToShow: 1,
        //   сколько спри скролле прокручивается слайдов
          slidesToScroll: 1,
          fade: true,
          arrows: false
    };

    return (
        <Slider {...settings}>
            
          
        </Slider>
    )
}