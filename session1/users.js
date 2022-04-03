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
        id: Date.now(), // Mat.radom*90000
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
const showAllUsers = () =>{
    const allUsers = readStorageData("users")
    if(allUsers.length===0) return console.log("no users yet")
    allUsers.forEach(user=>{
        console.log(`id: ${user.id} - name: ${user.name} - age: ${user.age} - job: ${user.job}`)
    })
}
showUser = () => { }
delUser  = () => { }
editUser = () => { }



// addUser()
showAllUsers()
//git clone link
//git pull origin master