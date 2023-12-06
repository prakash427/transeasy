// reducers.js
import { combineReducers } from 'redux';

const userReducer = (state = { name: '', phoneNumber: '',productName:'',dimensions:'' }, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return { ...state, name: action.payload };
    case 'SET_USER_PHONE_NUMBER':
      return { ...state, phoneNumber: action.payload };
    case 'SET_PRODUCT' :
      return{...state,productName : action.payload} ;
      case 'SET_PRODUCT_DIMENSIONS' :
      return{...state,dimensions : action.payload} ;  
    default:
      return state;
  }
};

export default userReducer;


