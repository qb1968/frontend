import React, { useState, useEffect } from "react"
import axiosWithAuth from './axiosWithAuth'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {addWorkout} from '../actions/workout'

export const Button = styled.button`
    border-radius:25px;
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    background-color: #222;
    padding: 17px 60px;
    margin: 0 auto;
    margin-top:5%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.20);

`


const AddExercise = (props) => {
    const [exerciseData, setExerciseData] = useState({name:'', user_id: '', amount_lifted:'', reps: '', body_region:'', sets: '', date: '' })

    const handleChange = e => {
        setExerciseData(
            {
                ...exerciseData,
                [e.target.name]: e.target.value
            }
        )
    }

    const onSubmit = e => {
        e.preventDefault()
        props.addWorkout(exerciseData)
          setExerciseData(
                {
                    ...exerciseData,
                    name:'',
                    user_id: props.id, 
                    amount_lifted:'', 
                    reps: '', 
                    body_region:'', 
                    sets: '', 
                    date: Date.now 
                }
            )

    }
    
    useEffect(()=>{
      axiosWithAuth()
      .get('/exercises')
    }) 

    console.log(exerciseData)

    return(
        <form onSubmit={onSubmit}>
        <input
        type="text"
        name="name"
        value={exerciseData.name}
        placeholder="Exercise Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="amount_lifted"
        value={exerciseData.amount_lifted}
        placeholder="Weight"
        onChange={handleChange}
      />
      <input
        type="text"
        name="reps"
        value={exerciseData.reps}
        placeholder="Amount of Reps"
        onChange={handleChange}
      />
        <input
        type="text"
        name="sets"
        value={exerciseData.sets}
        placeholder="Amount of Sets"
        onChange={handleChange}
      />
        <input
        type="text"
        name="body_region"
        value={exerciseData.body_region}
        placeholder="Muscle target"
        onChange={handleChange}
      />
      <Button>Submit</Button>
        </form>
    )

}


const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addWorkout })(AddExercise);