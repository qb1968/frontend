import React, {useState, useEffect } from 'react';
import axiosWithAuth from './axiosWithAuth';
import axios from 'axios'




const Exercise = ({workout}) => {


    return (
        <div className='card'>
            <h2>{workout.name}</h2>
            <p>Muscle focus: {workout.body_region}</p>
            <p>Amount Lifted: {workout.amount_lifted}</p>
            <p>Reps: {workout.reps}</p>
            <p>Sets: {workout.sets}</p>
            <p>Recorded: {workout.date}</p>
        </div>
    )
}

export default Exercise;