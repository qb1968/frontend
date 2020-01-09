import React, { useState, useEffect } from "react"
import axiosWithAuth from './axiosWithAuth'
import {connect} from 'react-redux'
import {addWorkout} from '../actions/workout'




const AddExercise = (props) => {
    const [exerciseData, setExerciseData] = useState({name:'', user_id: '', amount_lifted:'', reps: '', body_region:'', sets: '', date: '' })

    const handleChange = e => {
        setExerciseData(
            {
                ...exerciseData,
                [e.target.name]: e.target.value
            }
        )
    }

    const onSubmit = e => {
        e.preventDefault()
        props.addWorkout(exerciseData)
          setExerciseData(
                {
                    ...exerciseData,
                    name:'',
                    user_id: props.id, 
                    amount_lifted:'', 
                    reps: '', 
                    body_region:'', 
                    sets: '', 
                    date: Date.now 
                }
            )

    }
    
    useEffect(()=>{
      axiosWithAuth()
      .get('/exercises')
    }) 

    console.log(exerciseData)

    return(
        <form onSubmit={onSubmit} className='form' >
        <input className='add'
        type="text"
        name="name"
        value={exerciseData.name}
        placeholder="Exercise Name"
        onChange={handleChange}
      />
      <input className='add'
        type="text"
        name="amount_lifted"
        value={exerciseData.amount_lifted}
        placeholder="Weight"
        onChange={handleChange}
      />
      <input className='add'
        type="text"
        name="reps"
        value={exerciseData.reps}
        placeholder="Amount of Reps"
        onChange={handleChange}
      />
        <input className='add'
        type="text"
        name="sets"
        value={exerciseData.sets}
        placeholder="Amount of Sets"
        onChange={handleChange}
      />
        <input className='add'
        type="text"
        name="body_region"
        value={exerciseData.body_region}
        placeholder="Muscle target"
        onChange={handleChange}
      />
      <button className='button'>Submit</button>
        </form>
    )

}


const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addWorkout })(AddExercise);