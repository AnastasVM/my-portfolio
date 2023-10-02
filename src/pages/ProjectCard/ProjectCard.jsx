import React, { useState, useContext } from "react";
import s from "./ProjectCard.module.css";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import { useParams } from "react-router-dom";
import { CardContext } from "../../context/cardContext";

const ProjectCard = ({title, children, image, name, date, href}) => {
   
    const { works } = useContext(CardContext);
    const { projectId} = useParams();
    const [card, setCard] = useState(works);

const newProject = card.filter((item) => item.id === Number(projectId));

console.log("newProject===>", newProject[0].title);

    // useEffect = (() => {        
    // setCard(...newProject);
// }, []);

    console.log("projectId---->", typeof projectId);
    console.log("card---->", card);


    return (
        <div className={s.card}>
            <div className="container">
                <ContentHeader title={newProject[0].title}/>
                <div className={s.work}>
                    <div className={s.workPreview}>
                        <img className={s.workPhoto} src={newProject[0].image} alt={`Изображение -${newProject[0].title}`} />
                    </div>

                    <div className={s.workContent}>
                       <div className={s.woirkInfo}>
                            {newProject[0].name} <span className={s.divider}>|</span> {newProject[0].date}
                       </div>
                       <div className={s.workClient}>
                            <div className={s.clientTitle}>Cliient:</div>
                            <div className={s.clientCompany}>{newProject[0].cliient}</div>
                       </div>

                       <div className={s.workText}>
                        <p>{`Проект реализован с помощью технологий: ${newProject[0].text}`}</p>
                       </div>

                       <div className={s.linkCard}>
                            <a className={s.linkWork} target="_blank" href={newProject[0].href}>Ссылка на проект</a>
                       </div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectCard;