import React from 'react';

const Exercise = ({data}) => {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>Muscle focus: {data.body_region}</p>
            <p>Amount Lifted: {data.amount_lifted}</p>
            <p>Reps: {data.reps}</p>
            <p>Sets: {data.sets}</p>
            <p>Date Recorded: {data.date}</p>
        </div>
    )
}

export default Exercise;