import React, {useState, useEffect} from "react";

import axios from "axios";
import {Link} from "react-router-dom"
import axiosWithAuth from './axiosWithAuth'

const UpdateWorkout = (props) => {
    const [workout, setWorkout] = useState({name:'', user_id: '', amount_lifted:'', reps: '', body_region:'', sets: '', date: '' });
    // useEffect(() => {
    //     axiosWithAuth()
    //         .get(`/exercises/`)
    //         .then(res => {
    //             console.log(res)
    //             setWorkout(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

console.log(workout)

    const handleChanges = e => {
        e.preventDefault();
        setWorkout({
            ...workout, 
            [e.target.name]: e.target.value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/exercises/${props.exerciseid}`, workout)
            .then(res => {
                // props.history.push("/workout")
                console.log(res)
                // setWorkout(res.data)
            })
    }

    return (
        <form onSubmit={submitForm}>
            <h2>UPDATE WORKOUT</h2>
            <div>
                <input
                    id='name'
                    label="Workout Name"
                    margin="normal"
                    onChange={handleChanges}
                    name="name"
                    value={workout.name}
                />
            </div>
            <div>
                <input
                    id="body_region"
                    label="Muscle Region"
                    margin="normal"
                    onChange={handleChanges}
                    name="body_region"
                    value={workout.body_region}
                />
            </div>
            <div>
                <input 
                    id="amount_lifted"
                    label="amount_lifted"
                    type="number"
                    margin="normal"
                    onChange={handleChanges}
                    name="amount_lifted"
                    value={workout.reps}
                />
            </div>
            <div>
                <input 
                    id="reps"
                    type="number"
                    margin="normal"
                    onChange={handleChanges}
                    name="reps"
                    value={workout.reps}
                />
            </div>
            <div>
                <input
                    id="sets"
                    type="text"
                    margin="normal"
                    onChange={handleChanges}
                    name="sets"
                    value={workout.sets}
                />
            </div>
            <button  onClick={submitForm}>Save</button>
        </form>
    )
}

export default UpdateWorkout;