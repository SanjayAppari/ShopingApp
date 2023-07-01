import { SET_DISPLAY_ITEMS, SET_MALE_ITEMS, SET_OPEN_ITEM } from "../actions/action-types";

const initialState = {
    displayItems:[],
    openItem:{},
}

export default (state=initialState,action)=>{
    if(action.type === SET_DISPLAY_ITEMS){
        return{
            ...state,displayItems:action.payload
        }
    }
    else if(action.type === SET_OPEN_ITEM){
        return{
            ...state,openItem:action.payload
        }
    }
    else return state
}