import React, { useState } from "react"
import axiosWithAuth from './axiosWithAuth'


const addExercise = () => {
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
        </form>
    )

}

export default addExercise