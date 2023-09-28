import React from "react";
import s from "./Foter.module.css";
import cn from "classnames";
import Social from "../Social/Social";
import Navbar from "../Navbar/Navbar";

const Footer = ({setModalActive}) => {
    return (
     <footer className={s.footer}>  
        <div className="container">
            <div className={s.inner}>
                <div className={s.social}>
                    <Social alt="gray" />
                </div>
                <nav className={s.nav}>
                    <Navbar look="secondary" setModalActive={setModalActive}/>
                </nav>

            </div>
        </div>
    </footer> 
        
    )
}

export default Footer;