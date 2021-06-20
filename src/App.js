import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import DailyWorkout from "./components/DailyWorkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/exercises" component={Exercises} />
          <Route path="/daily-workout" component={DailyWorkout} />
        </Switch>
      </div>
    </Router>
  )}

export default App;
