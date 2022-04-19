//encryption 
//bcrptjs
const bcryptjs = require('bcryptjs')

const c = async(pass) =>{
    let hashed = await bcryptjs.hash(pass, 10)
    console.log(hashed)
    comparePass(pass, hashed)
}

const comparePass = async(pass, hashed) =>{
    const val = await bcryptjs.compare(pass, hashed)
    console.log(val)
}

c('123')
