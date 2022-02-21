import { ADD,  ADD_TO_CART,  CHANGE_QTY,  DELETE_FROM_CART,  DELETE_PRODUCTS,  UPDATE_PRODUCT } from "../conststants/constants"

export const updateProduct=(payload)=>{
  return {
      type:UPDATE_PRODUCT,
      payload
  }
}

export const addProduct=(payload)=>{
    return {
        type:ADD,
        payload
    }
}

export const addProductToCart=(payload)=>{
    return{
        type:ADD_TO_CART,
        payload
    }
}

export const deleteProductFromProducts=(payload)=>{
    return {
        type:DELETE_PRODUCTS,
        payload
    }
}

 export const changeQty=(payload)=>{
    console.log(payload);
     return {
         
         type:CHANGE_QTY,
         payload
     }
 }

 export const deleteFromCart=(payload)=>{
     return{
         type:DELETE_FROM_CART,
         payload
     }
 }