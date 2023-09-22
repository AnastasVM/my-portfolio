import React from "react";
import s from "./Contacts.module.css";
import ContentHeader from "../../component/ContentHeader/ContentHeader";

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className="container">
            <ContentHeader title="Контакты"/>
            </div>
        </div>
    )
}

export default Contacts;