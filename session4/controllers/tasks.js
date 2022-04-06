const deal = require("./dealWithJson")
const createTaskObj = (data)=>{
    return { id:data.id, title:data.title, content:data.content }
}
const printTaskObj = (task)=>{
    console.log(`id: ${task.id} - title:${task.title} - content:${task.content}
------------------------------------------------------`)
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
const showAll = () =>{
    const allTasks = deal.readDataFromJSON("tasks.json")
    allTasks.forEach( task => printTaskObj(task))
}
const showSingle = (searchKey, searchVal)=>{
    try{
        const allTasks = deal.readDataFromJSON("tasks.json")
        let task = searchInTasks(allTasks, searchKey, searchVal, "singleData")
        if(!task) throw new Error("task not found")
        printTaskObj(task)
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports = { add, showAll , showSingle}
