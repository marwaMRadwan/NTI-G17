
const readStorageData = ()=> {
    let data
    try{
        data = JSON.parse(localStorage.getItem("users"))
        // console.log(data)
        if(!Array.isArray(data)) throw new Error("invalid")
    }
    catch(e){
        data = []
    }
    return data
}

console.log(readStorageData())