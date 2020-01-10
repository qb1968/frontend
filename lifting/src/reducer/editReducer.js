
import {EDIT_WORKOUT_START, EDIT_WORKOUT_SUCCESS, EDIT_WORKOUT_FAILURE} from "../actions/editAction";

const initialState = {
    isAdded: false,
    isLoading: false,
    error: ""
}

export const editReducer = (state = initialState, action) => {
    switch(action.type){
        case EDIT_WORKOUT_START: 
            return {
                ...state,
                isAdded: false,
                isLoading: true
            }
        case EDIT_WORKOUT_SUCCESS:
            return {
                ...state,
                isAdded: true,
                isLoading: false
            }
        case EDIT_WORKOUT_FAILURE: 
            return {
                ...state,
                isAdded: false,
                error: action.payload
            }
        default:
            return state;
    }
}