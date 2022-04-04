const addUser = document.querySelector("#addUser")
const userHeads = ["name", "age", "job", "country"]
// read from storage
const readFromStorage = (storageKey="users") =>{
    let data
    try{
        data = JSON.parse(localStorage.getItem(storageKey)) || []
        if(!Array.isArray(data)) throw new Error("not an array")
    }
    catch(err){
        data = []
    }
    return data
}
// write to storage
const writeToStorage = (data=[], storageKey="users")=>{
    localStorage.setItem(storageKey, JSON.stringify(data))
}

addUser.addEventListener("submit", function(e){
    e.preventDefault()
    // console.log(this.elements.name.value)
    let user = { id:Date.now() }
    userHeads.forEach( head => user[head] = this.elements[head].value)
    const allUsers = readFromStorage()
    allUsers.push(user)
    writeToStorage(allUsers)
    this.reset()
    window.location.href = "index.html";
})




// create 
// read 
// update 
// delete 
// show single