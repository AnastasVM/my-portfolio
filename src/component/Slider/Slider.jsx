import React from "react";
import s from "./Slider.module.css";
import Flickity from "react-flickity-component";
import './flickity.css';
import swimming from './images/plavanii.jpg';
import skiing from './images/лыжи.jpg';
import catamaran from './images/сплавы3.jpg';
import catamaran1 from './images/сплавы.JPG';
import travel from './images/семья.jpg';


const flickityOptions = {
    initialIndex: 2
}

const myHobbies = {
    id: [1, 2, 3, 4, 5],
    title: ['Плавание', 'Горные лыжи', 'Сплавы на катамаранах', 'Сплавы на катамаранах','Путешествия с семьей'],
    image: [swimming, skiing, catamaran, catamaran1, travel]

}

const Slider = ({children}) => {
    return (
        <div className={s.abouteMe}>
            <Flickity
                className={s.Slider}
                elementType="div"
                disableImagesLoaded={false}
                options={flickityOptions}
                reloadOnUpdate
                static
                
                data-flickity='{ "autoPlay": 1500 }'
            >
            {myHobbies['id'].map((index) => {
                return (
                    <div key={index} className={s.Plate}>
                        <>
                        <h2>{myHobbies['title'][index - 1]}</h2>
                        <div style={{
                            backgroundImage: `url(${myHobbies['image'][index - 1]})`,
                            width: '100%',
                            height: 800,
                            backgroundSize: 'cover'
                        }}></div>
                        </>
                    </div>
                )
            })}
            </Flickity>
            {children}
        </div>
    )
};

export default Slider;