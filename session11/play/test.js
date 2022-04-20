// //encryption 
// //bcrptjs
// const bcryptjs = require('bcryptjs')

// const c = async(pass) =>{
//     let hashed = await bcryptjs.hash(pass, 10)
//     console.log(hashed)
//     comparePass(pass, hashed)
// }

// const comparePass = async(pass, hashed) =>{
//     const val = await bcryptjs.compare(pass, hashed)
//     console.log(val)
// }

// c('123')

// const jwt = require("jsonwebtoken")

// const gen = async(userID) => {
//     const token = await jwt.sign(userID, "123")
//     console.log(token)
//     const d = jwt.verify(token, '123')
//     console.log(d)
// }

// gen({_id:"625e7f20194f1f5093db1595"})

// [{token:"123"}, {token:"456"}]


// var macaddress = require('macaddress');
// macaddress.one().then(function (mac) {
//     console.log("Mac address for this host: %s", mac);  
//   });


