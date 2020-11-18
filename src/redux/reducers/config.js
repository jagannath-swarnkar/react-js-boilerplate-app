import { LANG } from "../actionTypes/config";

const initialState = {
    lang: 'en'
}
export const configReducer = (state=initialState, action) => {
    switch (action.type){
        case LANG:
            return {
                ...state,
                lang: action.payload
            }
            
        default:
            return state;
            
    }
}