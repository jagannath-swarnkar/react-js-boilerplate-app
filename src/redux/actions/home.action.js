import { THEME_CHANGE } from "../actionTypes"

export const actionThemeChange = (theme) => {
    return {
        type: THEME_CHANGE,
        payload: theme
    }
}