import React from "react";
import cn from "classnames";
import s from "./Social.module.css";
import telegram from "../Intro/images/telegram.svg";
import git from "../Intro/images/github.svg";
import vk from "../Intro/images/vk.svg";
import instagrabm from "../Intro/images/instagram.svg";

const Social = () => {
    return (
        <div className={cn(s.social)}>
            <a className={cn(s.link)} href="#">
                <img width={25} height={25} src={telegram} alt="telegram" />
            </a>
            <a className={cn(s.link)} href="#">
                <img width={25} height={25} src={git} alt="git" />
            </a>
            <a className={cn(s.link)} href="#">
                <img width={25} height={25} src={vk} alt="vk" />
            </a>
            <a className={cn(s.link)} href="#">
                <img width={25} height={25} src={instagrabm} alt="inst" />
            </a>
        </div>
    );
}
 
export default Social;