import React from "react";
import "../styles/exerciseList.css";

const ExerciseList = ({ title, id, selected, setSelected }) => {

    return (
        <li className={selected ? "exerciseList-active" : "exerciseList"}
            onClick={() => setSelected(id)}>
                {title}
        </li>
    )
}

export default ExerciseList;