// console.log("hello")
//build-in fs  writeFileSync  readFileSync
// const myFs = require("fs")
// myFs.writeFileSync("test.txt", "hello from node")

//my own module
// const mod = require("./myMod")
// mod.test()
// mod.x()

//npmjs.com
// const validator = require('validator');
// console.log(validator.isEmail('foobar.com'))
// console.log(validator.isMobilePhone('01934567896', ['ar-EG']));
//npm i chalk@4.0.0
// console.log(__dirname)
// console.log(__filename)

// console.log(process.argv)

// const result = (a, b, op)=>{
//     if(op == "+") console.log(a+b)
//     else console.log(a-b)
// }

// result(2,3, process.argv[2] )
// const arr = []
// myFun = (pro) =>{
//     if(pro=="add")arr.push("add")
//     else if (pro=="del") arr.push("del")
//     else console.log('not valid');
// }

// myFun(process.argv[2])
// console.log(arr)

// name, age, => user={id:date, name:"", age:""}
const yargs = require("yargs")
// node app + --x=5 --y=9 
yargs.command({
    command:"+",
    builder:{
        x:{ type:"number", demandOption:true },
        y:{ type:"number", demandOption:true }
    },
    handler: function(argv){
        console.log(argv.x+argv.y)
    }
})
yargs.command({
    command:"-",
    handler: function(){
        console.log("del")
    }
})
yargs.argv













