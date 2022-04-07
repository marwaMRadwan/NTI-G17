require('dotenv').config()
const app = require('./src/app')
const PORT = process.env.PORT || 3000 //union
app.listen(PORT, ()=> console.log(`we are on http://localhost:${PORT}`))