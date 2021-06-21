import React from "react";
import "../styles/exerciseList.css";

const ExerciseList = ({ image, id, selected, setSelected }) => {

    return (
            <li className={selected ? "exerciseList-active" : "exerciseList"}
                onClick={() => setSelected(id)}>
                <img className="img" src={image} alt=""/>
            </li>

    )
}

export default ExerciseList;