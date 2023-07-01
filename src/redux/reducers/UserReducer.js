import { SET_CART } from "../actions/action-types";

const initialState = {
    cart:[],
}

export default (state=initialState,action)=>{
    if(action.type === SET_CART){
        return{
            ...state,cart:action.payload,
        }
    }   
    else return state;
};