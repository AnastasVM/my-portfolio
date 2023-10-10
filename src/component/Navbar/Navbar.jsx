import React, { useState } from "react";
import cn from "classnames";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import close from "./image/close.svg";
import burger from "./image/burger.svg";

const Navbar = ({look = 'primary', className, setModalActive}) => {

    const [nav, setNav] = useState(false);

    const handleNav = (e) => {
      e.preventDefault();
      setNav(!nav);
    }

    return (
      <>
          <nav className={cn(s.menu, {
            [s.show] : nav
          })} onClick={() => setNav(false)}>
            <Link to="/works" onClick={() => setNav(!nav)} className={cn(s.link, className, {
              [s.primary]: look === 'primary',
              [s.secondary]: look === 'secondary',
            })}>
              Мои проекты
            </Link>
            <Link to="/aboutMe" onClick={() => setNav(!nav)} className={cn(s.link, className, {
              [s.primary]: look === 'primary',
              [s.secondary]: look === 'secondary',
            })}>
              Обо мне
            </Link>
            <Link to="/contacts" onClick={() => setNav(!nav)} className={cn(s.link, className, {
              [s.primary]: look === 'primary',
              [s.secondary]: look === 'secondary',
            })}>
              Контакты
            </Link>
            <Button href="#" look={look} onClick={()=> setModalActive(true)}>Сотрудничество</Button> 
        </nav>
        <button onClick={handleNav} className={s.burger}>
         { nav ? <img className={s.burgerIcon} src={close} alt="" /> : <img className={s.burgerIcon} src={burger} alt="" />}
        </button>
      </>    
    );
}

export default Navbar;

