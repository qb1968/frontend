import React from 'react';
import axiosWithAuth from './axiosWithAuth';





const Exercise = ({workout}) => {
    console.log(workout)


    const editWorkout = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/exercises/${workout.id}`)
      };

      const deleteWorkout = e => {
        axiosWithAuth()
          .delete(`/exercises/${workout.id}`)
          .then(res => console.log(res))
          .catch(err => {
              console.log(err)
          })
      }
      

    return (
        <div className='card'>
            <h2>{workout.name}</h2>
            <p>Muscle focus: {workout.body_region}</p>
            <p>Amount Lifted: {workout.amount_lifted} LB</p>
            <p>Reps: {workout.reps}</p>
            <p>Sets: {workout.sets}</p>
            <p>Recorded: {workout.date}</p>
            <button onClick={editWorkout}>Edit</button>
            <button  onClick={e => {e.stopPropagation();
                deleteWorkout(workout.id)}}>Delete</button>
        </div>
    )
}

export default Exercise;