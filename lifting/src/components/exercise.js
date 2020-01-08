import React from 'react';




const Exercise = (workouts) => {

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