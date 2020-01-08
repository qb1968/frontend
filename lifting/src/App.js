import React from 'react';
import "./styles/Trackerpage.scss"


import LoginForm from './components/Login/loginForm';

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import AddExercise from './components/addExercise';
import MyWorkouts from './components/myExercises';
import NavBar from './components/NavBar';



function App() {
  return (
    <Router>
    <div className="App">

      <Router>
            <Route exact path="/"><h1 className="title">Weight Lifting Tracker</h1></Route>
            <Route  path="/login"><LoginForm/></Route>
      </Router>

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