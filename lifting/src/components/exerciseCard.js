import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {editWorkout} from '../actions/editAction'
import axiosWithAuth from './axiosWithAuth'
import UpdateWorkout from '../components/UpdateExercises'

const ExerciseCard = (props) => {
    console.log(props)
    useEffect(()=> {
        props.editWorkout(props.match.params.id)


        
    },[])
    
return (<div>
    <UpdateWorkout exerciseid={props.match.params.id} />
</div>)
}

const mapStateToProps = state => {
    return state
}


export default connect(mapStateToProps, {editWorkout})(ExerciseCard)