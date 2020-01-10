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
            <div className="addexercise"> 
                <h3>Add Exercise</h3>
                <AddExercise />
            </div>
            <h3>Current exercises</h3> 
            <div className='list'>
          {workout.map(out => (
              <div  key={out.id}>
                  <Exercise workout={out} />
              </div>
          ))}
           </div> 
        </div>
    )
}

export default MyWorkouts;

