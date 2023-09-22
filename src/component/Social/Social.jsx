import React from "react";
import cn from "classnames";
import s from "./Social.module.css";
import telegram from "../Intro/images/telegram.svg";
import git from "../Intro/images/git.svg";
import vk from "../Intro/images/vk.svg";
import instagram from "../Intro/images/instagram.svg";
import instagramGray from "../Intro/images/instagram_gray.svg";
import telegramGray from "../Intro/images/telegram_gray.svg";
import gitGray from "../Intro/images/git_gray.svg";
import vkGray from "../Intro/images/vk_gray.svg";

function Social({ alt }) {
    return (
        <div className={cn(s.social)}>
            <a className={cn(s.link)} target="_blank" href="https://t.me/CharodoroNasya">
                {alt !== "gray" ? (
                    <img width={25} height={25} src={telegram} alt={alt} />
                ) : (
                    <img width={20} height={20} src={telegramGray} alt={alt} />
                )}
            </a>
            <a className={cn(s.link)} target="_blank" href="https://github.com/AnastasVM">
                {alt !== "gray" ? (
                    <img width={25} height={25} src={git} alt={alt} />
                ) : (
                    <img width={20} height={20} src={gitGray} alt={alt} />
                )}
            </a>
            <a className={cn(s.link)} target="_blank" href="https://vk.com/id2684536">
                {alt !== "gray" ? (
                    <img width={25} height={25} src={vk} alt={alt} />
                ) : (
                    <img width={20} height={20} src={vkGray} alt={alt} />
                )}
            </a>
            <a className={cn(s.link)} target="_blank" href="https://instagram.com/nastya_mysnik?igshid=OTJhZDVkZWE=">
                {alt !== "gray" ? (
                    <img width={25} height={25} src={instagram} alt={alt} />
                ) : (
                    <img width={25} height={20} src={instagramGray} alt={alt} />
                )}
            </a>
        </div>
    );
}
 
export default Social;