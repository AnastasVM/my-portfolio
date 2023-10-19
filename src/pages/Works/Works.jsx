import React, { useState } from "react";
import cn from "classnames";
import s from "./Works.module.css";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import Work from "../../component/Work/Work";
import Button from "../../component/Button/Button";
import Sort from "../../component/Sort/Sort";

const Works = ({works, children}) => {

 const [selectedSection, setSelectedSection] = useState(works);

 const handlleAllWorks = () => {
        setSelectedSection(works);
 }

    return ( 
        <div className={cn(s.works)}>
            <ContentHeader title="Мои проекты"/>
            <div className="container">
                <Sort works={works} setSelectedSection={setSelectedSection} />

                 <div className={s.portfolio}>
                        {selectedSection.map((e)=> 
                                <div className={s.col} key={e.id}>
                                        <div className={s.item}>
                                                <Work id={e.id} image ={e.image} name={e.name} title={e.title} date={e.date} href={e.href}/>
                                        </div>
                                </div>
                                )}
                 </div>
                <div className={s.textCenter}>
                    <Button onClick={handlleAllWorks}>Загрузить больше работ</Button>
                </div>
             {children}
            </div>
        </div>
     );
}
 
export default Works;