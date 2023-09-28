import React from "react";
import s from "./Intro.module.css";
import cn from "classnames";
import Social from "../Social/Social";
import Button from "../Button/Button";
import nastya from "./images/Nastya.png";
import Skills from "../Skills/Skills";


const Intro = ({setModalActive, children}) => {

    return (  
        <div className={cn(s.intro)}>
        <div className="container">

            <div className={s.wrapper}>
                <div className={cn(s.content)}>
                    <h2 className={cn(s.subtitle)}>Привет, я</h2>
                    <h1 className={cn(s.title)}>Анастасия Мысник</h1>
                    <div className={cn(s.text)}>Frontend-разработчик</div>
                    <Skills/>
                    <h3 className={s.socialTitle}>Социальные сети</h3>
                    <Social/>
                    <div className={s.introButton}>
                    <Button className={s.button} onClick={()=> setModalActive(true)}>Сотрудничество</Button>
                    <Button onClick={()=> setModalActive(true)}>Резюме</Button>
                    </div>
                </div>
             
                <div className={cn(s.photo)}>
                    <img className={s.img} src={nastya} alt="Nastya" />
                </div>
                {children}
            </div>
        </div>
    </div>

    );
}
 
export default Intro;