import React from "react";
import s from "./NotFound.module.css";
import notFound from "./image/6373669.jpg";

const NotFound =() => {
    return (
        <div className="container">
        <div className={s.notFound}>
            <div className={s.text}>
                <h1>Вы перешли на несуществующую страницу!</h1>
            </div>
            <div className={s.wrapper}>
                <img className={s.img} src={notFound} alt="" />
            </div>
        </div>
    </div>
    )
}

export default NotFound;