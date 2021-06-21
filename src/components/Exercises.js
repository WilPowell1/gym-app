import React, { useState, useEffect } from "react";
import ExerciseList from "./ExerciseList";
import "../styles/exercises.css";
import * as exerciseData from "../data";
import { imageData } from "../ImageData";


const Exercises = () => {

    const [data, setData] = useState([""]);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        setData(exerciseData[selected])
    }, [selected])

    return (
        <div className="exercises">
            <h3>Exercises</h3>
            <ul className="exercises-container">
                {imageData.map((item) => (
                    <ExerciseList
                        image={item.image}
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