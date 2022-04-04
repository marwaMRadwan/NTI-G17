const addUser = document.querySelector("#addUser")
const userHeads = ["name", "age", "job", "country"]
const dataWrapper= document.querySelector("#dataWrapper")
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
// create 
if(addUser){
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
}
// read 
const createMyOwnElement = (parent, ele, text=null)=>{
    const myElement = document.createElement(ele)
    parent.appendChild(myElement)
    if(text) myElement.textContent = text
    return myElement
}
if(dataWrapper){
    const allUsers = readFromStorage()
    allUsers.forEach((user,index)=>{
        const tr = createMyOwnElement(dataWrapper, "tr")
        createMyOwnElement(tr, "td", index+1)
        createMyOwnElement(tr, "td", user.id)
        userHeads.forEach(head=> createMyOwnElement(tr, "td", user[head]))
    })
}



// update 
// delete 
// show single