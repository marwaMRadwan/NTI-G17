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
const createMyOwnElement = (parent, ele,text=null, classes= null, attributes = null)=>{
    const myElement = document.createElement(ele)
    parent.appendChild(myElement)
    if(text) myElement.textContent = text
    if(classes) myElement.classList = classes
    if(attributes){
        attributes.forEach(attr=>{
            myElement.setAttribute(attr.attrName, attr.attrVal)
        })
    }
    return myElement
}
const createMyOwnElement1 = (myObj)=>{
    const myElement = document.createElement(myObj.ele)
    myObj.parent.appendChild(myElement)
    if(myObj.text) myElement.textContent = myObj.text
    if(myObj.classes) myElement.classList = myObj.classes
    if(myObj.attributes){
        myObj.attributes.forEach(attr=>{
            myElement.setAttribute(attr.attrName, attr.attrVal)
        })
    }
    return myElement
}
const delUser = (allUsers, index)=>{
    allUsers.splice(index,1)
    writeToStorage(allUsers)
    drawData(allUsers)
}
const singleUserDraw = (user, index, allUsers) =>{
    const tr = createMyOwnElement(dataWrapper, "tr")
    createMyOwnElement(tr, "td", index+1)
    createMyOwnElement(tr, "td", user.id)
    userHeads.forEach(head=> createMyOwnElement(tr, "td", user[head]))
    const td = createMyOwnElement(tr, "td")
    const showBtn = createMyOwnElement(td, "button", "show", "btn btn-primary mx-2")
    const editBtn = createMyOwnElement(td, "button", "Edit", "btn btn-success mx-2")
    const delBtn = createMyOwnElement(td, "button", "delete", "btn btn-danger mx-2")
    delBtn.addEventListener('click', (e) => delUser(allUsers, index))
}
const drawNoData = () =>{
    const tr = createMyOwnElement(dataWrapper, "tr", null, "alert alert-danger")
    const attr = [ { attrName:"colspan", attrVal: 7 } ]
    createMyOwnElement(tr, "td", "no users yet", null, attr)
}
const drawData = (allUsers) =>{
    dataWrapper.innerHTML=""
    if(allUsers.length==0) drawNoData()
    else allUsers.forEach((user,index)=> singleUserDraw(user, index, allUsers))
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
if(dataWrapper){
    const allUsers = readFromStorage()
    drawData(allUsers)
}
