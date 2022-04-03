const readStorageData = (storageKey, dataType= null)=> {
    let data
    try{
        data = localStorage.getItem(storageKey)
        if(!dataType) data = JSON.parse(data)
        if(!Array.isArray(data) && !dataType ) 
            throw new Error("invalid")
    }
    catch(e){
        data = []
    }
    return data
}

const writeStorageData = (data, storageKey)=>{
    localStorage.setItem(storageKey, JSON.stringify(data))
}

