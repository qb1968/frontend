import React from 'react';
import "./styles/Trackerpage.scss"
import LoginForm from './components/Login/loginForm';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MyWorkouts from './components/myExercises';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import SignUpForm from './components/SignUp';
import UpdateWorkout from './components/UpdateExercises';
import ExerciseCard from './components/exerciseCard'





function App() {
  return (

    <Router>
    <div className="App">
           <NavBar/> 
     <section className="exercises">
      <Switch>
        <Route path="/update" component={UpdateWorkout}/>
        <PrivateRoute path='/exercise/:id' component={ExerciseCard} />
        <Route path="/signup"   component={SignUpForm} />         
        <Route  path="/login" component={LoginForm}/>
        <PrivateRoute path="/workout" component={MyWorkouts} />
      </Switch>
      </section>

    </div>
    </Router>

  );
}

export default App;