/*
revision js basics
advanced js => clousers, callback, promises, async await, then catch, fetch
node js=> terminal
express js => hbs files, mongodb
restful api => express, mongoose
ts=> session (oop) 
angular 
clean code , performance, logic
*/

// let 
// var 
// const
// var x = 1
// var x = 6
// var x = "hello"

// console.log(x)
// let y = 1
// let y = 2

// x = 10

// function test(){
//     // let x=5
//     console.log(x)
// }
// test()
// console.log(x)


// var y = 10 
// if(true){
//     var y = 5
//     console.log("inside block")
//     console.log(y)
// }
// console.log("outside block")
// console.log(y)


// one function run one function

function getDataFromUser(msg,dataType=false){
    let data = prompt(msg)
    if(dataType) data = Number(data) // +data   data*1.0  parseInt  parseFloat
    return data
}

function addNumbers(...values){ //arguments 
    let vals = [...values]  // converts arguments to array
    // vals.forEach((v,i)=> console.log(`${i} ==> ${v}`))
    // console.log(typeof vals[0])
    let total = 0
    vals.forEach( val => total += val )
    return total
}

// console.log(addNumbers(5,3,6,9,4,5))
// let myVal = getDataFromUser(1)
// console.log(typeof myVal)
// function subNumbers(){}
// function mulNumbers(){}
//forEach   for

function project(){
    let x = getDataFromUser("please enter a valid number :", 1)
    let y = getDataFromUser("please enter a valid number :", 1)
    let op = getDataFromUser("please enter a valid operator :")
    let result 
    switch(op){
        case "+": result =addNumbers(x,y); break;
        default: result = "invalid opertion"
    }
    return result
}
console.log(project())















