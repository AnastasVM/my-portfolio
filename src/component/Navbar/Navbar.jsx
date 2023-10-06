import React, { useState } from "react";
import cn from "classnames";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = ({look = 'primary', className, setModalActive}) => {

    const [nav, setNav] = useState(false);

    return (
      <>
          <nav className={ nav ? [s.menu, s.active].join(' ') : [s.menu]}>
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
        <div onClick={() => setNav(!nav)} className={s.mobile_btn}>
            { nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>  
        
      </>    
    );
}

export default Navbar;

