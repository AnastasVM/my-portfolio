import React from "react";
import cn from "classnames";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = ({look = 'primary', className, setModalActive}) => {
    return (
        <nav className={cn(s.nav)}>
            <Link to="/works" className={cn(s.link, className, {
              [s.primary]: look === 'primary',
              [s.secondary]: look === 'secondary',
            })}>
              Мои проекты
            </Link>
            <Link to="/aboutMe" className={cn(s.link, className, {
              [s.primary]: look === 'primary',
              [s.secondary]: look === 'secondary',
            })}>
              Обо мне
            </Link>
            <Link to="/contacts" className={cn(s.link, className, {
              [s.primary]: look === 'primary',
              [s.secondary]: look === 'secondary',
            })}>
              Контакты
            </Link>
            
            <Button href="#" look={look} onClick={()=> setModalActive(true)}>Сотрудничество</Button>          
        </nav>
    );
}

export default Navbar;

