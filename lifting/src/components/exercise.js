import React from 'react';
import axiosWithAuth from './axiosWithAuth';





const Exercise = ({workout}) => {
    console.log(workout)
    const editWorkout = e => {
        e.preventDefault();
        axiosWithAuth()
        .put('/exercies/:id')
      };

      const deleteWorkout = e => {
        e.preventDefault();
        axiosWithAuth()
          .delete(`/exercies/:id/${workout.id}`)
      }
      

    return (
        <div className='card'>
            <h2>{workout.name}</h2>
            <p>Muscle focus: {workout.body_region}</p>
            <p>Amount Lifted: {workout.amount_lifted}</p>
            <p>Reps: {workout.reps}</p>
            <p>Sets: {workout.sets}</p>
            <p>Recorded: {workout.date}</p>
            <button onClick={editWorkout}>Edit</button>
            <button  onClick={deleteWorkout}>Delete</button>
        </div>
    )
}

export default Exercise;