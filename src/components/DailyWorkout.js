import React, { useState } from "react";
import { nanoid } from "nanoid";
import DailyWorkoutList from "./DailyWorkoutList";
import DailyWorkoutForm from "./DailyWorkoutForm";
import DailyWorkoutFilter from "./DailyWorkoutFilter";
/*import "../styles/dailyWorkout.css";*/

  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

const DailyWorkout = () => {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (name) => {
    const newTask = { id: "todo-" + nanoid() , name: name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => id !== task.id); 
    setTasks(remainingTasks);
  }

  const editTask = (id, newName) => {
    const editLastTask = tasks.map(task => {
      if (id === task.id) {
        return { ...task, name: newName};
      }
      return task;
    });
    setTasks(editLastTask);
  }

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => ( 
    <DailyWorkoutList
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
    )
  );

  const filterList = FILTER_NAMES.map(name => (
    <DailyWorkoutFilter
      key={name} 
      name={name}
      isPressed={name === filter} 
      setFilter={setFilter} 
    />
  ));

  const taskNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${taskNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>today's workout</h1>
      <DailyWorkoutForm addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default DailyWorkout;