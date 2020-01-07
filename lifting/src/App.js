import React from 'react';
import "./styles/Trackerpage.scss"
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import AddExercise from './components/addExercise';
import MyWorkouts from './components/myExercises';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <section className="exercises">
      <Switch>
        <Route path="/" component={MyWorkouts} />
      </Switch>
      </section>
    </div>
    </Router>
  );
}

export default App;
