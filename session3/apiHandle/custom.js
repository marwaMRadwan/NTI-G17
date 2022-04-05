const apiLink = "https://jsonplaceholder.typicode.com/photos?_limit=10"
// fetch(apiLink)
// .then(data=> {
//     data.json()
//     .then(res=> console.log(res))
//     .catch(err=> console.log(err))
// })
// .catch(e=> console.log(e))

const apiHandle = async(apiLink, cb) =>{
    try{
        let data = await fetch(apiLink)
        let jsonData = await data.json()
        cb(jsonData, false)
    }
    catch(e){
        cb(false, e.message)
    }
}
apiHandle(apiLink, (res)=>{
    if(err) console.log(err)
    else console.log(res)
})




