import { useState } from "react";
import s from "./Sort.module.css";
import { sortedTabs } from "./data";
import cn from "classnames";

const Sort = ({works, setSelectedSection}) => {

    const [selectedSortId, setSelectedSortId] = useState('');

    const handleSort = (sort) => {
        setSelectedSortId(sort.id);

        if (sort.name === 'Все') {
            setSelectedSection(works)
        } 
        if(sort.name === 'Приложениe') {
            const newWorks = [...works].filter((item) => item.name === 'Приложение');
            setSelectedSection([...newWorks])
        }
        if (sort.name === 'Интернет-магазин') {
            const newWorks = works.filter((item) => item.name === 'Интернет-магазин');
            setSelectedSection([...newWorks])
        } 
        if (sort.name === 'Лендинг') {
            const newWorks = works.filter((item) => item.name === 'Лендинг');
            setSelectedSection([...newWorks])
        } 
        if (sort.name === 'Веб-сайт') {
            const newWorks = works.filter((item) => item.name === 'Веб-сайт');
            setSelectedSection([...newWorks])
        } 
    }

    return (
        <div className={s.sort}>
            {sortedTabs.map((sort) => (
                <div className={cn(s.sortLink, {
                    [s.active] : sort.id === selectedSortId
                }
                )}
                    id ={sort.id}
                    key={sort.id}
                    onClick={() => handleSort(sort)}
                >
                {sort.name}
                </div>
            ))}
        </div>
    )

}

export default Sort;