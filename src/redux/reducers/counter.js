import { DECREMENT, INCREMENT } from "../actionTypes"

const initialState = {
    counter: 0
}
export const counterReducer = (state=initialState, action) => {
    switch (action.type){
        case INCREMENT:
            return {
                ...state,
                counter: action.payload
            }
            
        case DECREMENT:
            return {
                ...state,
                counter: action.payload
            }

        default:
            return state;
            
    }
}