import React, { useState, useEffect } from "react";
import s from "./Cooperation.module.css";
import nastya from "./images/Nastya_1.png";
import mail from "./images/mail.svg";
import telephone from "./images/telephone.svg";
import Button from "../Button/Button";

const Cooperation = ({setModalActive}) => {

    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [textDirty, setTextDirty] = useState(false);
    const [emailError, setEmailError] = useState("Емейл не может быть пустым");
    const [textError, setTextError] = useState("Поле не может быть пустым");
    const [formValid, setFormValid] = useState(false);

    useEffect (() => {
        if (emailError || textError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, textError])

    const sendRequest = (e) => {
        e.preventDefault();
        console.log(email, text);
        setEmail("");
        setText("");

        setModalActive(false);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный email");
        } else {
            setEmailError("");
        } 
    }

    const textHandler = (e) => {
        setText(e.target.value)
        if (e.target.value.length < 3) {
            setTextError("Текст должен быть длинее 3 слов")
            if(!e.target.value) {
                setTextError("Поле не может быть пустым")
            }
        } else {
            setTextError("")
        }
    }

    const blurHandler = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.name) {
            case 'email' :
                setEmailDirty(true)
                break
            case 'text' :
                setTextDirty(true)
                break
        }
    }

    return (
        <div className={s.contact}>
            <div className={s.contactLeft}>
                <h3 className={s.modalTitle}>Нужен сайт или есть вопросы</h3>
                <div className={s.modalSubtitle}>ПОЗВОНИТЕ МНЕ ИЛИ ОТПРАВЬТЕ ЗАПРОС</div>
                <ul className={s.info}>
                    <li className={s.infoItem}>
                        <img className={s.infoIcon} src={telephone} alt="telephone" />
                        +7 983 123 33 84
                    </li>
                    <li className={s.infoItem}>
                        <img className={s.infoIcon} src={mail} alt="mail" />
                        nastya.v.m@mail.ru
                    </li>
                </ul>

                <form className={s.form} action="/" method="post">
                    <div className={s.formGroup}>
                        <label className={s.label} htmlFor="input-email">Adress e-mail</label>
                        {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                        <input className={s.input} 
                        type="text" 
                        id="input-email" 
                        placeholder="Adress e-mail"
                        value={email}
                        onChange={e => emailHandler(e)}
                        name ="email"
                        onBlur={e => blurHandler(e)}
                        />
                    </div>
                    <div className={s.formGroup}>
                        <label className={s.label} htmlFor="input-text">Request</label>
                        {(textDirty && textError) && <div style={{color:"red"}}>{textError}</div>}
                       <textarea 
                       name="text" 
                       id="input-text" 
                       className={s.textarea} 
                       placeholder="Type your request..."
                       value={text}
                       onChange={e => textHandler(e)}
                       onBlur={e => blurHandler(e)}
                       />
                    </div>
                    <div className={s.btnRight}>
                    {/* {(!formValid) && <div style={{color:"red"}}>Форма не отправлена</div>} */}
                       
                    { formValid ? (
                        <Button
                            disabled={!formValid}
                            type="submit" 
                            onClick={sendRequest}
                            >отправить</Button>
                     ) : (
                        <div style={{color:"black", textAlign: "center", fontSize: "16px",
                        fontWeight: "700"}}>Пожалуйста, заполните все поля формы 
                        для отправки запроса</div>
                        )}
                    </div>
                </form>
            </div>
            <div className={s.contactRight}>
                <img className={s.img} src={nastya} alt="Nastya" />
            </div>

        </div>
    )
}

export default Cooperation;