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
const printUserData = (user)=>{
    console.log(`id: ${user.id} - name: ${user.name} - age: ${user.age} - job: ${user.job}`)
}
const showAllUsers = () =>{
    const allUsers = readStorageData("users")
    if(allUsers.length===0) return console.log("no users yet")
    allUsers.forEach(user=> printUserData(user) )
}
const searchUser = (key, val,allUsers, type="s")=>{
    let response
    if(type!="s") response = allUsers.filter(user => user[key]==val)
    else response = allUsers.findIndex(user=> user[key]== val)
    return response
}
showUser = (id) => {
    const allUsers = readStorageData("users")
    let userIndex = searchUser("id", id, allUsers)
    if(userIndex==-1) return console.log("User Not Found")
    printUserData(allUsers[userIndex])
}
delUser  = (id) => { 
    const allUsers = readStorageData("users")
    let userIndex = searchUser("id", id, allUsers)
    if(userIndex==-1) return console.log("User Not Found")
    allUsers.splice(userIndex, 1)
    writeStorageData(allUsers, "users")
}
editUser = (id) => {    
    const allUsers = readStorageData("users")
    const userIndex = searchUser("id", id, allUsers)
    if(userIndex==-1) return console.log("user not found")
    let userData = userObjCreator()
    userData.id = id
    allUsers[userIndex] = userData
    writeStorageData(allUsers, "users")   
}

editUser(1648985525007)