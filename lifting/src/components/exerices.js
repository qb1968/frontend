import React, {useState, useEffect} from 'react'
import axiosWithAuth from './axiosWithAuth'
import AddExercise from './addExercise'






const MyWorkouts = () => {
    const [workout, setWorkout] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get("/exercises")
        .then(res => setWorkout(res.data))
        .catch(e => console.error(e))
    })

    return (
        <div>
            <h1>Add Exercise</h1>
            <AddExercise />   
        </div>
    )
}

