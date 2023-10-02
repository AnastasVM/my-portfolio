import React from "react";
import s from "./Work.module.css";
import { Link } from "react-router-dom";


const Work = ({id, title, children, image, name, date, href}) => {
    return (   
        <Link className={s.link} to={`/project/${id}`}>      
            <div className={s.card}>
                <img className={s.image} src={image} alt="" />
                <div className={s.content}>
                    <div className={s.cat}>category: {name}</div>
                    <div className={s.title}>
                        {title}
                        <time className={s.date} dateTime="2023-05-10">{date}</time>
                    </div>
                </div>
                <div className={s.linkCard}>
                    <a className={s.linkWork} target="_blank" href={href}>Ссылка на проект</a>
                </div>
                {children}
            </div>
        </Link>
     );
}
 
export default Work;