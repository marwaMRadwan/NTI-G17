const deal = require("./dealWithJson")

const createTaskObj = (data)=>{
    return { id:data.id, title:data.title, content:data.content }
}
const add = (data) =>{
    const allTasks = deal.readDataFromJSON("tasks.json")
    let task = createTaskObj(data)
    allTasks.push(task)
    deal.writeDataToJSON('tasks.json', allTasks)
}

module.exports = {
    add
}