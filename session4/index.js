// const deal = require('./controllers/dealWithJson')
// const d = deal.readDataFromJSON("tasks.json")
// console.log(d);

// data = [
//     {id:1,title:"a", content:"aa"},
//     {id:2,title:"b", content:"bb"},
//     {id:3,title:"c", content:"cc"},
//     {id:4,title:"d", content:"dd"},
// ]
// deal.writeDataToJSON("tasks.json", data)

const yargs = require("yargs")
const tasks = require('./controllers/tasks')
yargs.command({
    command:"add",
    describe:"add new task data",
    builder:{
        id:  { default: Date.now() },
        title:{type:"string", demandOption:true},
        content:{type:"string", demandOption:true}
    },
    handler: (argv)=>tasks.add(argv)
})
yargs.command({
    command:"showAll",
    describe:"show all tasks",
    handler: ()=> tasks.showAll()
})
yargs.command({
    command:"showSingle",
    describe:"show single task data",
    builder:{
        searchKey:  { type:"string", demandOption:true },
        searchVal:{type:"string", demandOption:true}
    },
    handler: (argv)=>tasks.showSingle(argv.searchKey, argv.searchVal)
})
yargs.argv











