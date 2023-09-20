import React from "react";
import s from "./About.module.css";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import AbouteMe from "../../component/AbouteMe/AbouteMe";

const Aboute = ({children}) => {
    return (
        <div className={s.about}>
            <ContentHeader title="Мои увлечения"/>
           
            <div className="container">
                <AbouteMe/>
            </div>
        </div>
    )
};

export default Aboute;