import React, {useState, useEffect } from 'react';
import axiosWithAuth from './axiosWithAuth';
import axios from 'axios'




const Exercise = (workouts) => {
    const [workout, setWorkout] = useState([]);

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
            <h2>{workouts.name}</h2>
            <p>Muscle focus: {workouts.body_region}</p>
            <p>Amount Lifted: {workouts.amount_lifted}</p>
            <p>Reps: {workouts.reps}</p>
            <p>Sets: {workouts.sets}</p>
            <p>Date Recorded: {workouts.date}</p>
        </div>
    )
}

export default Exercise;