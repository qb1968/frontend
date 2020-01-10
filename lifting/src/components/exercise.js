import React from 'react';
import axiosWithAuth from './axiosWithAuth';
import { Link } from 'react-router-dom';





const Exercise = ({workout}) => {
    console.log(workout)


      const deleteWorkout = e => {
        axiosWithAuth()
          .delete(`/exercises/${workout.id}`)
          .then(res => console.log(res))
          .catch(err => {
              console.log(err)
          })
      }
      
      const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/exercises/${workout.id}`, workout)
            .then(res => {
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
            <Link to='/update'>Edit</Link>
            <button  onClick={deleteWorkout}>Delete</button>
        </div>
    )
}

export default Exercise;