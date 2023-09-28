import React from "react";
import s from "./Skills.module.css";
import html from "./images/icons-html.svg";
import css from "./images/icons-css.svg";
import react from "./images/icons-react.svg";
import github from "./images/icons-github.svg";

const Skills = () => {
    return (
        <div className={s.skills}>
            <h3 className={s.skillsTitle}>Навыки</h3>
            <a className={s.link} target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
                <img src={html} alt="html" width={55} height={55}/>
            </a>
            <a className={s.link} target="_blank" href="https://www.w3.org/TR/CSS/#css">
                <img src={css} alt="css" width={55} height={55}/>
            </a>
            <a className={s.link} target="_blank" href="https://ru.legacy.reactjs.org/">
                <img src={react} alt="react" width={55} height={55}/>
            </a>
            <a className={s.link} target="_blank" href="https://github.com/">
                <img src={github} alt="git" width={55} height={55}/>
            </a>
        </div>
    )
}

export default Skills;