
export const getDataFromLocalStorage=()=>{
    const localStorageData=JSON.parse(localStorage.getItem('products'))
    if(localStorageData){
        return localStorageData
    }else{
        return []
    }
}


// const [userDetails,setUserDeteails]=useState(getDataFromLocalStorage())
// const [objectUser,setObjectUser]=useState({
//     firstName:'',
//     lastName:''
// })

// const validate=()=>{
//     if(firn && last){
//         localStorage.setItem('products',objectUser)
//     }
// }