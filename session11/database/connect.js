const mongoose = require("mongoose")
mongoose.connect(process.env.offlineDB)
// mongoose.connect(process.env.onlinedb)