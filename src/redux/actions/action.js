import { SET_CART, SET_DISPLAY_ITEMS, SET_MALE_ITEMS, SET_OPEN_ITEM } from "./action-types";

export const setDisplayItems = (Items)=>({
    type: SET_DISPLAY_ITEMS,
    payload : Items
});


export const setOpenItem = (Item)=>({
    type: SET_OPEN_ITEM,
    payload: Item
});




export const setCart = (Items)=>({
    type:SET_CART,
    payload:Items
})