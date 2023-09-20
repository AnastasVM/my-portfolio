import React, { useState } from "react";
import cn from "classnames";
import s from "./Works.module.css";
import progect from "./img/React-team-project.png";
import dogfood from "./img/DogFood.png";
import cats from "./img/Cats.png";
import greencorp from "./img/GereenCorp.png";
import pokemon from "./img/Pokemon.png";
import activebox from "./img/ActiveBox.png";
import mogo from "./img/Mogo.png";
import portfolio from "./img/Portfolio.png";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Work from "../../component/Work/Work";
import Button from "../../component/Button/Button";
import Sort from "../../component/Sort/Sort";

const Works = ({children}) => {

        const [works, setWorks] = useState([
{id: 1, image: progect, name: "Приложение", title: "React-team-project", date: "2023", href: "https://pavel11123.github.io/react-team-project/"},
{id: 2, image: dogfood, name: "Интернет-магазин", title: "DogFood", date: "2023", href: "https://anastasvm.github.io/dogfood/"},
{id: 3, image: cats, name: "Приложение", title: "Cats", date: "2022", href: "https://anastasvm.github.io/Cats/"},
{id: 4, image: greencorp, name: "Лендинг", title: "GreenCorp", date: "2022", href: "https://anastasvm.github.io/green-corp-landing/"},
{id: 5, image: pokemon, name: "Веб-сайт", title: "Pokemon", date: "2023", href: "https://anastasvm.github.io/pokemon/"},
{id: 6, image: activebox, name: "Веб-сайт", title: "ActiveBox", date: "2022", href: "https://anastasvm.github.io/ActiveBox/"},
{id: 7, image: mogo, name: "Веб-сайт", title: "Mogo", date: "2022", href: "https://anastasvm.github.io/MoGo/"},
{id: 8, image: portfolio, name: "Веб-сайт", title: "Portfolio", date: "2022", href: "https://anastasvm.github.io/Portfolio/"},
 ]);

 const [selectedSection, setSelectedSection] = useState(works);
 console.log("selectedSection--->", selectedSection);

    return ( 
        <div className={cn(s.works)}>
            <ContentHeader title="Мои проекты"/>
            <div className="container">
                <Sort works={works} setSelectedSection={setSelectedSection} />

                 <div className={s.portfolio}>
                        {selectedSection.map((e)=> 
                                <div className={s.col} key={e.id}>
                                        <div className={s.item}>
                                                <Work  image ={e.image} name={e.name} title={e.title} date={e.date} href={e.href}/>
                                        </div>
                                </div>
                                )}
                 </div>
                <div className={s.textCenter}>
                    <Button>Загрузить больше работ</Button>
                </div>
             {children}
            </div>
        </div>
     );
}
 
export default Works;