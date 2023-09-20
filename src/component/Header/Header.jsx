import React from "react";
import s from './Header.module.css';
import cn from "classnames";

const Header = ({children}) => {
    return (
        <header className={cn(s.header)}>
        <div className="container">
            <div className={s.wrapper}>
                {children}
            </div>
        </div>
    </header>
    )
}

export default Header;