import React, {useState, useEffect} from 'react'
import axiosWithAuth from './axiosWithAuth'
import AddExercise from './addExercise'
import Exercise from './exercise'






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
            <h3>Add Exercise</h3>
            <AddExercise />
            <h3>Current exercises</h3>
          {workout.map(out => (
              <div  className='list'key={out.id}>
                  <Exercise workout={out} />
              </div>
          ))}
            
        </div>
    )
}

export default MyWorkouts;

