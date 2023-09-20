import React from "react";
import cn from "classnames";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
    return (
        <nav className={cn(s.nav)}>
            <Link to="/works" className={s.link}>
              Мои проекты
            </Link>
            <Link to="/aboutMe" className={s.link}>
              Обо мне
            </Link>
            {/* <a className={cn(s.link)} href="">Обо мне</a> */}
            <a className={cn(s.link)} href="">Контакты</a>
            <Button href="#">Сотрудничество</Button>          
        </nav>
    );
}

export default Navbar;

