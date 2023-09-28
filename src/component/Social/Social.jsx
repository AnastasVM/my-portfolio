import React from "react";
import cn from "classnames";
import s from "./Social.module.css";
import telegram from "./images/telegram.svg";
import git from "./images/github.svg";
import vk from "./images/vk.svg";
import instagram from "./images/instagram.svg";
import instagramGray from "./images/instagram_gray.svg";
import telegramGray from "./images/telegram_gray.svg";
import gitGray from "./images/github — копия.svg";
import vkGray from "./images/vk_gray.svg";

function Social({ alt }) {
    return (
        <div className={cn(s.social)}>
            <a className={cn(s.link)} target="_blank" href="https://t.me/CharodoroNasya">
                {alt !== "gray" ? (
                    <img width={45} height={45} src={telegram} alt={alt} />
                ) : (
                    <img width={25} height={25} src={telegramGray} alt={alt} />
                )}
            </a>
            <a className={cn(s.link)} target="_blank" href="https://github.com/AnastasVM">
                {alt !== "gray" ? (
                    <img width={45} height={45} src={git} alt={alt} />
                ) : (
                    <img width={25} height={25} src={gitGray} alt={alt} />
                )}
            </a>
            <a className={cn(s.link)} target="_blank" href="https://vk.com/id2684536">
                {alt !== "gray" ? (
                    <img width={45} height={45} src={vk} alt={alt} />
                ) : (
                    <img width={25} height={25} src={vkGray} alt={alt} />
                )}
            </a>
            <a className={cn(s.link)} target="_blank" href="https://instagram.com/nastya_mysnik?igshid=OTJhZDVkZWE=">
                {alt !== "gray" ? (
                    <img width={45} height={45} src={instagram} alt={alt} />
                ) : (
                    <img width={25} height={25} src={instagramGray} alt={alt} />
                )}
            </a>
        </div>
    );
}
 
export default Social;