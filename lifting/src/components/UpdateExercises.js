import React, {useState, useEffect} from "react";

import axios from "axios";
import {Link} from "react-router-dom"
import axiosWithAuth from './axiosWithAuth'

const UpdateWorkout = (props) => {
    const [workout, setWorkout] = useState({name:'', user_id: '', amount_lifted:'', reps: '', body_region:'', sets: '', date: '' });
    useEffect(() => {
        axiosWithAuth()
            .get(`/exercises`)
            .then(res => {
                console.log(res)
                setWorkout(res.data)
            })
            .catch(err => console.log(err))
    }, [])

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
            .put(`/exercises/${workout.id}`, workout)
            .then(res => {
                props.history.push("/workout")
                setWorkout(res.data)
            })
    }

    if (!workout){
        return <div>Loading workout information...</div>
    }

    return (
        <form onSubmit={submitForm}>
            <h2>UPDATE WORKOUT</h2>
            <div>
                <input
                    id='name'
                    label="Workout Name"
                    margin="normal"
                    variant="outlined"
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
                    variant="outlined"
                    onChange={handleChanges}
                    name="region"
                    value={workout.body_region}
                />
            </div>
            <div>
                <input 
                    id="reps"
                    label="Reps"
                    type="number"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="reps"
                    value={workout.reps}
                />
            </div>
            <div>
                <input 
                    id="weight"
                    label="lbs"
                    type="number"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="weight"
                    value={workout.weight}
                />
            </div>
            <div>
                <input
                    id="date"
                    type="date"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="date"
                    value={workout.date}
                />
            </div>
            <button className="submit-button" onClick={submitForm}>Save</button>
        </form>
    )
}

export default UpdateWorkout;