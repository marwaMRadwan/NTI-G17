const deal = require("./dealWithJson")
const showAll = () =>{
    const allTasks = deal.readDataFromJSON("tasks.json")
    return allTasks
}
const showSingle = (searchKey, searchVal)=>{
    try{
        const allTasks = deal.readDataFromJSON("tasks.json")
        let task = searchInTasks(allTasks, searchKey, searchVal, "singleData")
        if(!task) throw new Error("task not found")
        return task
    }
    catch(e){
        return false
    }
}

const createTaskObj = (data)=>{
    return { id:data.id, title:data.title, content:data.content }
}
const searchInTasks = (allTasks, searchKey, searchVal, searchType="singleIndex")=>{
    if(searchType=='singleIndex')
        return allTasks.findIndex(task => task[searchKey] == searchVal )
    else if(searchType=='singleData')
        return allTasks.find(task => task[searchKey] == searchVal )
    else
        return allTasks.filter(task => task[searchKey] == searchVal )
}
const add = (data) =>{
    try{
        const allTasks = deal.readDataFromJSON("tasks.json")
        if(searchInTasks(allTasks, "title", data.title)!=-1) throw new Error("title used before")
        let task = createTaskObj(data)
        allTasks.push(task)
        deal.writeDataToJSON('tasks.json', allTasks)    
    }
    catch(e){
        console.log(e.message)
    }
}
const edit = (data) =>{
    try{
        const allTasks = deal.readDataFromJSON("tasks.json")
        const index = searchInTasks(allTasks, data.searchKey, data.searchVal)
        if(index==-1) throw new Error('not found')
        dataHeaders = ["title", "content"]
        dataHeaders.forEach(head=>{
            if(data[head]) allTasks[index][head] = data[head]
        })
        deal.writeDataToJSON("tasks.json", allTasks)
        console.log('data updated');
    }
    catch(e){
        console.log(e.message)
    }
}
const del = (searchKey, searchVal)=>{
    try{
        const allTasks = deal.readDataFromJSON("tasks.json")
        let task = searchInTasks(allTasks, searchKey, searchVal)
        if(task==-1) throw new Error("task not found")
        allTasks.splice(task, 1)
        deal.writeDataToJSON("tasks.json", allTasks)
    }
    catch(e){
        console.log(e.message)
    }
}

module.exports = {showAll, showSingle}
