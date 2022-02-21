
export const getDataFromLocalStorage=()=>{
    const localStorageData=JSON.parse(localStorage.getItem('products'))
    if(localStorageData){
        return localStorageData
    }else{
        return []
    }
}
