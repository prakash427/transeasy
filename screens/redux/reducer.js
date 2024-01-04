// reducers.js
import { combineReducers } from 'redux';

const userReducer = (state = { name: '', phoneNumber: '',products:[],dimensions:'',image: null,coupon:'' }, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return { ...state, name: action.payload };
    case 'SET_USER_PHONE_NUMBER':
      return { ...state, phoneNumber: action.payload };
    case 'SET_PRODUCT' :
      return{...state,products : action.payload} ;
      case 'SET_PRODUCT_DIMENSIONS' :
      return{...state,dimensions : action.payload} ;  
      case 'SET_IMAGE':
      return { ...state, image: action.payload };
      case 'SET_COUPON':
      return { ...state, coupon: action.payload };
    default:
      return state;
  }
};

export default userReducer;


