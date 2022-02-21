import { getDataFromLocalStorage } from "../../components/gettingDataFromLocalStorage"
import { ADD, DELETE_PRODUCTS } from "../conststants/constants"

const initialState = {
    list: getDataFromLocalStorage()
}

const allProductsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD:
            const newList = [...state.list]
            const findIndexOf = newList.findIndex(ele => {
                return ele.itemName === action.payload.itemName
            })
            console.log(findIndexOf);
            if (findIndexOf === -1) {
                newList.push(action.payload)
                const data = JSON.stringify(newList)
                localStorage.setItem('products', data)
            } else {
                alert('item has been added')
            }

            return {
                ...state,
                list: newList
            }


        case DELETE_PRODUCTS:
            const updatedArray = [...state.list]
            const afterUpdated = updatedArray.filter((ele, index) => {
                return index !== action.payload
            })
            console.log(afterUpdated);
            const modifiedData = JSON.stringify(afterUpdated)
            localStorage.setItem('products', modifiedData)
            return {
                ...state,
                list: afterUpdated
            }

        default: return state
    }
}

export default allProductsReducer