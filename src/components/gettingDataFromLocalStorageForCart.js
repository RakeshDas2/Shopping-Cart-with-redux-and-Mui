
export const gettingDataFromLocalStorageForCart=()=>{
    const localStorageData=JSON.parse(localStorage.getItem('cart_products'))
    if(localStorageData){
        return localStorageData
    }else{
        return []
    }
}
