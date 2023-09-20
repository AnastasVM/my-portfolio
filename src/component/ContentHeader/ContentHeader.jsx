import React from "react";
import s from "./ContentHeader.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Arrow } from "./img/leftArrow.svg";

const ContentHeader = ({children, title}) => {
    const navigate = useNavigate();
    return ( 
        <div className="container">
             <a href="#" className={s.buttonBack} onClick={() => navigate(-1)}>
                <Arrow/>Назад</a>
            <h1 className={s.title}>{title}</h1>
       {children}
        </div>
     );
}
 
export default ContentHeader;