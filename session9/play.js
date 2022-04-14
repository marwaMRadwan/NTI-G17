require('./db/conn')
const User = require("./db/models/user.model")
const myData = new User({
    name:"MARWA",
    password:"123@Mero456",
    email:"a1@a.com",
    gender:"female",
    x:"abc"
})
// console.log(myData)
myData.save()
.then((res)=> console.log(res))
.catch((e)=> console.log(e.message))
