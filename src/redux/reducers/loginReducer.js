import * as actionTypes from "../actions/actionTypes";

const initialState = {
    isLoggedIn: false
}


export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GIRIS_YAP:
      return { 
        ...state,
        isLoggedIn: true 
    };
    case actionTypes.CIKIS_YAP:
        return { 
            ...state,
            isLoggedIn: false 
        };
    case actionTypes.SET_LOGGED_IN:
        return { 
            ...state,
            isLoggedIn: action.payload 
        };
    default:
      return state;
  }

  
}