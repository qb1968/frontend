import React from 'react';
import "./styles/Trackerpage.scss"
import {BrowserRouter as Router,Route,Link } from "react-router-dom";
import LoginForm from './components/Login/loginForm';
function App() {
  return (
    <div className="App">
      <Router>
            <Route exact path="/"><h1 className="title">Weight Lifting Tracker</h1></Route>
            <Route  path="/login"><LoginForm/></Route>
      </Router>
    </div>
  );
}

export default App;