import React from "react";
import s from "./Work.module.css";


const Work = ({title, children, image, name, date, href}) => {
    return (         
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
     );
}
 
export default Work;