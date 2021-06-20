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

const Exercises = ({ addTask }) => {

    const [data, setData] = useState([""]);
    const [name, setName] = useState("");
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

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(name);
        setName("");
    }

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
                    <div className="exercise-groups" onSubmit={handleSubmit}>
                        <div onChange={handleChange} className="individual-exercises">
                            {d.type}
                            <button type="submit" className="btn btn__primary btn__lg">
                                Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Exercises;