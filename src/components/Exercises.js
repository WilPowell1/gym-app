import React, { useState, useEffect } from "react";
import ExerciseList from "./ExerciseList";
import "../styles/exercises.css";
import * as exerciseData from "../data";
import * as exerciseImages from "../ImageData";


const Exercises = () => {

    const [data, setData] = useState([""]);
    const [selected, setSelected] = useState("");
    const listSelection = ["abs", "arms", "back", "chest", "glutes", "hamstrings", "quads", "shoulders", "olympic", "strongwoman"]

    useEffect(() => {
        setData(exerciseData[selected])
    }, [selected])

    return (
        <div className="exercises">
            <h3>Exercises</h3>
            <ul className="exercises-container">
                {listSelection.map((item) => (
                    <ExerciseList
                        title={item}
                        selected={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="exercise-types">
                {data && data.map((item) => (
                    <div className="exercise-groups">
                        <div className="individual-exercises">
                            {item.type}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Exercises;