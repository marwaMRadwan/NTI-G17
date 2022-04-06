const deal = require("./dealWithJson")
const createTaskObj = (data)=>{
    return { id:data.id, title:data.title, content:data.content }
}
const printTaskObj = (task)=>{
    console.log(`id: ${task.id} - title:${task.title} - content:${task.content}
------------------------------------------------------`)
}
const add = (data) =>{
    const allTasks = deal.readDataFromJSON("tasks.json")
    let task = createTaskObj(data)
    allTasks.push(task)
    deal.writeDataToJSON('tasks.json', allTasks)
}
const showAll = () =>{
    const allTasks = deal.readDataFromJSON("tasks.json")
    allTasks.forEach( task => printTaskObj(task))
}
module.exports = { add, showAll }