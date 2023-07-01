import { SET_DISPLAY_ITEMS } from "./action-types";

export const setDisplayItems = (Items)=>({
    type: SET_DISPLAY_ITEMS,
    payload : Items
});


