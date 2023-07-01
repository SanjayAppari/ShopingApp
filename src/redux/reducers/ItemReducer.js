import { SET_DISPLAY_ITEMS } from "../actions/action-types";

const initialState = {
    displayItems:[],
}

export default (state=initialState,action)=>{
    if(action.type === SET_DISPLAY_ITEMS){
        return{
            ...state,displayItems:action.payload
        }
    }
    else return state
}