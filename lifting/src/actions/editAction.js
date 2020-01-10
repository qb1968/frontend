import axiosWithAuth from "../components/axiosWithAuth";


export const EDIT_WORKOUT_START = "EDIT_WORKOUT_START";
export const EDIT_WORKOUT_SUCCESS = "EDIT_WORKOUT_SUCCESS";
export const EDIT_WORKOUT_FAILURE = "EDIT_WORKOUT_FAILURE";

export const editWorkout = id => dispatch => {
    dispatch({type: EDIT_WORKOUT_START});
    axiosWithAuth()
    .get(`https://weightlifting-journal.herokuapp.com/exercises/${id}`)
    .then(response => {
        console.log(response)
        dispatch({type: EDIT_WORKOUT_SUCCESS, payload: response.data});
    })
    .catch(error => {
        dispatch({type: EDIT_WORKOUT_FAILURE, payload: error})
    })
} 