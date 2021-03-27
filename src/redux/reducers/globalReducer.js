import { APP_TITLE, IS_MOBILE, LANG, THEME } from "../actionTypes"

const initialState = {
    appTitle: "Chat Module",
    theme: 'light',
    isMobile: false,
    lang: 'en'
}

const globalReducer = (state=initialState, action) => {
    switch (action.type){
        case APP_TITLE:
            return {
                ...state,
                appTitle: action.payload
            }
        case THEME:
            return {
                ...state,
                theme: action.payload
            }
        case IS_MOBILE: 
            return {
                ...state,
                isMobile: action.payload
            }
        case LANG:
            return {
                ...state,
                lang: action.payload
            }
        default: 
            return state;
    }
}
export default globalReducer;