import React, { useState } from "react"
import axiosWithAuth from './axiosWithAuth'
import styled from 'styled-components'

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


const AddExercise = () => {
    const [exerciseData, setExerciseData] = useState({name:'', amount_lifted:'', reps: '', body_region:'', sets: '', date: '' })

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
        axiosWithAuth()
        .post('/exercises/', exerciseData )
        .then(res => {
            setExerciseData(
                {
                    ...exerciseData,
                    name:'', 
                    amount_lifted:'', 
                    reps: '', 
                    body_region:'', 
                    sets: '', 
                    date: Date.now 
                }
            )
        })

    }
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
        name="weight"
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
        name="body_Region"
        value={exerciseData.sets}
        placeholder="Muscle target"
        onChange={handleChange}
      />
      <Button>Submit</Button>
        </form>
    )

}

export default AddExercise