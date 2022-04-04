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
if(dataWrapper){
    const allUsers = readFromStorage()
    if(allUsers.length==0){
        obj= {parent:dataWrapper, ele:"tr", classes:"alert alert-danger"}
        // const tr = createMyOwnElement(dataWrapper, "tr", null, "alert alert-danger")
        const tr = createMyOwnElement1(obj)
        const attr = [
            { attrName:"colspan", attrVal: 6 }, 
            { attrName:"name", attrVal:"x"  },
            { attrName:"class", attrVal :"test"}
        ]
        const td= createMyOwnElement(tr, "td", "no users yet", null, attr)
    }
    else{
    allUsers.forEach((user,index)=>{
        const tr = createMyOwnElement(dataWrapper, "tr")
        createMyOwnElement(tr, "td", index+1)
        createMyOwnElement(tr, "td", user.id)
        userHeads.forEach(head=> createMyOwnElement(tr, "td", user[head]))
    })
}
}



// update 
// delete 
// show single