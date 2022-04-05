//Clousers
// const c = (a) =>{
//     return {
//         a,
//         inc(){ return ++a},
//         dec() { return --a },
//         show() { return a }
//     }
// }

// const myClo = c(5)
// myClo.inc()
// console.log(myClo.show())

// const calc = (a, b) =>{
//     let res
//     return {
//         add(){ res = a+b},
//         sub() { res=a-b},
//         show(){return res}
//     }
// }
// let x = calc(2,3)
// x.sub()
// console.log(x.show())

// callBack
// const myCallBack = (val, cb) => {
//      if(typeof val == "number") cb(val*2, false)
//      else cb(false, "not a number")
// }

// myCallBack(0, (res, err)=>{
//     if(err) console.log("fe error")
//     else console.log(res)
// })

//promises
const myPromise = (val) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            typeof val == "number" ? resolve(val*2) : reject("not a number")
        }, 1500)
    })
}
//then catch
// myPromise("a")
// .then(data=> console.log(data))
// .catch(rej => console.log(rej))
// console.log("test")

//async await
const callPro = async() =>{
    try{
        let x = await myPromise(10)
        let y = await myPromise(x)
        console.log(y)    
    }
    catch(e){
        console.log(e)
    }
}

callPro()
console.log("test")
