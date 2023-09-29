import React from "react";
import s from "./Contacts.module.css";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import telephone from "./images/telephone1.svg";
import mail from "./images/mail-2.svg";

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className="container">
                <ContentHeader title="Контакты"/>
            </div>
            <div className={s.contactsPicture}>
                <img className={s.picture} src="https://wpuroki.ru/wp-content/uploads/2017/09/Kak-sdelat-kontakty-v-WordPress-v-shapke-sajta.jpg" alt="telephone" />
            </div>
            <div className="container">
                <ul className={s.info}>
                    <li className={s.infoItem}>
                        <img className={s.infoIcon} width={45} height={45} src={telephone} alt="telephone" />
                        +7 983 123 33 84
                    </li>
                    <li className={s.infoItem}>
                        <img className={s.infoIcon} width={45} height={45} src={mail} alt="mail" />
                        nastya.v.m@mail.ru
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contacts;