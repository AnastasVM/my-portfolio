import React from "react";
import cn from "classnames";
import s from "./Button.module.css"

const Button = ({look = 'primary',children, onClick, disabled, className, ...props}) => {
    return (
        <button className={cn(s.button, className, {
            [s.primary]: look === 'primary',
            [s.secondary]: look === 'secondary',
        })} onClick={onClick} {...props}>{children}</button>
    );
}
 
export default Button;