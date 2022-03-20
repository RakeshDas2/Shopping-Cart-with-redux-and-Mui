import { gettingDataFromLocalStorageForCart } from "../../components/gettingDataFromLocalStorageForCart";
import { ADD_TO_CART, CHANGE_QTY, DELETE_FROM_CART } from "../conststants/constants";

const initialState={
    list:gettingDataFromLocalStorageForCart()
}

const cartProductsReducer =(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const newList=[...state.list]
            const findIndexOf=newList.findIndex(ele=>{
                return ele.itemName===action.payload.itemName
            })
            if(findIndexOf===-1){
                newList.push(action.payload)
                const data=JSON.stringify(newList)
                localStorage.setItem('cart_products',data)
            }else{
                alert('item has been added')
            }
            
            return{
                  ...state,
                  list:newList
            }
                
            case CHANGE_QTY :
                const newArray=[...state.list]
                console.log(newArray);
                 newArray[action.payload.index].itemQty=action.payload.qty
                   console.log(newArray[action.payload.index]);
                const data1=JSON.stringify(newArray)
                localStorage.setItem('cart_products',data1)
             return{
                 ...state,
                 list:newArray
             }

             case DELETE_FROM_CART:
                 const modifiedArray=[...state.list]
                 const updatedArray=modifiedArray.filter((ele,index)=>{
                     return index!==action.payload
                 })
                 const data3=JSON.stringify(updatedArray)
                 localStorage.setItem('cart_products',data3)
                 
                 return{
                     ...state,
                     list:updatedArray
                 }
            default : return state
    }
}

export default cartProductsReducer;