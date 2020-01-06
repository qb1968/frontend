import React from 'react';
import "./styles/Trackerpage.scss"
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import AddExercise from './components/addExercise';

function App() {
  return (
    <Router>
    <div className="App">
      <h1 className="title">Weight Lifting Tracker</h1>
      <Switch>
        <Route path="/" component={AddExercise} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
