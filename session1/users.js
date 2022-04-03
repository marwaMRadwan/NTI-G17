const getDataFromUser= (msg)=> prompt(msg)

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
const userObjCreator = () =>{
    let userData = {
        name: getDataFromUser("please enter your name: "),
        age: getDataFromUser("please enter your age: "),
        job: getDataFromUser("please enter your job: ")
    }
    return userData
}
const addUser = ()=>{
    const allUsers = readStorageData("users")
    const user = userObjCreator()
    allUsers.push(user)
    writeStorageData(allUsers, "users")
}

addUser()