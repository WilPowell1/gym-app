import React from "react";
import "../styles/exerciseList.css";

const ExerciseList = ({ title, id, active, setSelected }) => {

    return (
        <li className={active ? "exerciseList-active" : "exerciseList"}
            onClick={() => setSelected(id)}>
                {title}
        </li>
    )
}

export default ExerciseList;