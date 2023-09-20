import React from "react";
import s from "./Avatar.module.css";
import nastya from "./Мысник_А.В.jpg";
import cn from 'classnames';
import { Link } from "react-router-dom";


const Avatar = () => {
    return (
        <Link to="/" style={{textDecoration: 'none'}}>
        <div className={cn(s.user)}>
       
            <div className={cn(s.avatar)}>
              <img src={nastya} alt="nastya" />
            </div>
            <div className={s.content}>
                <div className={s.name}>Анастасия 
                <br />
                Мысник</div>
                <div className={s.prof}>Frontend-разработчик</div>
            </div>
            </div>
        </Link>  

       
    );
}
 
export default Avatar;