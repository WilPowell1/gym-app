import React, { useState, useEffect } from "react";
import ExerciseList from "./ExerciseList";
import "../styles/exercises.css";
import { back, 
         quads, 
         shoulders, 
         glutes, 
         hamstrings, 
         abs, 
         chest, 
         arms,
         olympic,
         strongwoman } from "../data";

const Exercises = () => {

    const [data, setData] = useState(["back"]);
    const [selected, setSelected] = useState([]);
    const listSelection = [
        {
            id: "back",
            title: "back",
        },
        {
            id: "quads",
            title: "quads",
        },
        {
            id: "shoulders",
            title: "shoulders",
        },
        {
            id: "glutes",
            title: "glutes",
        },
        {
            id: "hamstrings",
            title: "hamstrings",
        },
        {
            id: "abs",
            title: "abs",
        },
        {
            id: "chest",
            title: "chest",
        },
        {
            id: "arms",
            title: "arms",
        },
        {
            id: "olympic",
            title: "olympic",
        },
        {
            id: "strongwoman",
            title: "strongwoman",
        },
    ]

    useEffect(() => {
        if (selected === "back") {
            return setData(back)
        }
        else if (selected === "quads") {
            return setData(quads)
        }
        else if (selected === "shoulders") {
            return setData(shoulders)
        }
        else if (selected === "glutes") {
            return setData(glutes)
        }
        else if (selected === "hamstrings") {
            return setData(hamstrings)
        }
        else if (selected === "chest") {
            return setData(chest)
        }
        else if (selected === "abs") {
            return setData(abs)
        }
        else if (selected === "arms") {
            return setData(arms)
        }
        else if (selected === "olympic") {
            return setData(olympic)
        }
        else if (selected === "strongwoman") {
            return setData(strongwoman)
        }
    }, [selected])

    return (
        <div className="exercises">
            <h3>Exercises</h3>
            <ul className="exercises-container">
                {listSelection.map((item) => (
                    <ExerciseList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="exercise-types">
                {data.map((d) => (
                    <div className="exercise-groups">
                        <div className="individual-exercises">
                            {d.type1}
                        </div>
                        <div className="individual-exercises">
                            {d.type2}
                        </div>
                        <div className="individual-exercises">
                            {d.type3}
                        </div>
                        <div className="individual-exercises">
                            {d.type4}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Exercises;