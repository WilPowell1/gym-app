import React from "react";

const DailyWorkoutFilter = ({ name, isPressed, setFilter }) => {

    return (
        <button 
            type="button" 
            className="btn toggle-btn" 
            aria-pressed={isPressed}
            onClick={() => setFilter(name)}
        >
          <span>{name}</span>
        </button>
    )
};

export default DailyWorkoutFilter;