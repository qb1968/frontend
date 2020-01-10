import React, {useState, useEffect} from 'react'
import axiosWithAuth from './axiosWithAuth'
import AddExercise from './addExercise'
import Exercise from './exercise'
import {Link} from "react-router-dom"
import styled from "styled-components";

const Word = styled.h2`
font-size: 20px
background-color:grey
margin:auto
text-align:center
height:3vh
`



const MyWorkouts = () => {
    const [workout, setWorkout] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get('/exercises')
            .then( res => {
                console.log(res)
                setWorkout(res.data)
            })
            .catch( err => {
                console.log(err)
            })
}, []);



    return (
        <div>
            <div className="addexercise"> 
                <Word>Add Exercise</Word>
                <AddExercise />
            </div>
            <Word>Current exercises</Word> 
            <div className='list'>
          {workout.map(out => (
              <div  key={out.id}>
                  <Link to={`/exercise/${out.id}`}>
                  <Exercise workout={out} />
                  </Link>
              </div>
          ))}
           </div> 
        </div>
    )
}

export default MyWorkouts;

