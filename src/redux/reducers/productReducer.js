const initialState = {
    itemImage:'',
    itemName: '',
    itemDesc: '',
    itemPrice: '',
}

const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case(action.payload):
        return {
               ...state,
               itemImage:action.payload.itemImage,
               itemName:action.payload.itemName,
               itemDesc:action.payload.itemDesc,
               itemPrice:action.payload.itemPrice
        }
        default: return state
    }
}

export default productReducer