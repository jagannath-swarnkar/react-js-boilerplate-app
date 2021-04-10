import { INIT_LANGUAGE_CHANGE, IS_MOBILE } from "../actionTypes";

export const setMobileView = (data) => {
    // console.log('data', data)
    return {
      type: IS_MOBILE,
      payload: data,
    };
};
  
export const setLanguage = (selectedLang) => {
    return {
        type: INIT_LANGUAGE_CHANGE,
        payload: selectedLang,
    };
};