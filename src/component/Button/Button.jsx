import React from "react";
import cn from "classnames";
import s from "./Button.module.css"

const Button = ({children, onClick, className}) => {
    return (
        <button className={cn(s.button, className)} onClick={onClick}>{children}</button>
    );
}
 
export default Button;