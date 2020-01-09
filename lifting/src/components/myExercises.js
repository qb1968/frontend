import React, {useState, useEffect} from 'react'
import axiosWithAuth from './axiosWithAuth'
import AddExercise from './addExercise'
import Exercise from './exercise'






const MyWorkouts = () => {
    const [workout, setWorkout] = useState([])
    // useEffect(()=>{
    //     axiosWithAuth()
    //     .get('/exercises')
    //     .then(res => setWorkout(res.data))
    //     .catch(err => console.error(err))
    // })

    return (
        <div>
            <h3>Add Exercise</h3>
            <AddExercise />
            {/* <Exercise /> */}
        </div>
    )
}

export default MyWorkouts;

