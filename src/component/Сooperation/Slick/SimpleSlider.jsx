import React from "react";

import "./slick.css"; 
import "./slick-theme.css";

import Slider from "react-slick";
import active from "./image/ActiveBox.png";
import mogo from "./image/Mogo.png";
// import { baseUrl } from "./config";

const SimpleSlider = () => {

        const settings = {
            customPaging: function(i) {
              return (
                <a>
                  {/* <img src={`${active}`} /> */}
                  {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
                </a>
              );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

          return (
            <div>
              <h2>Custom Paging</h2>
              <Slider {...settings}>
                <div>
                  <img src={active} />
                  {/* <img src={baseUrl + "/abstract01.jpg"} /> */}
                </div>
                <div>
                <img src={mogo} />
                  {/* <img src={baseUrl + "/abstract02.jpg"} /> */}
                </div>
                <div>
                  {/* <img src={baseUrl + "/abstract03.jpg"} /> */}
                </div>
                <div>
                  {/* <img src={baseUrl + "/abstract04.jpg"} /> */}
                </div>
              </Slider>
            </div>
          );
        }

export default SimpleSlider;