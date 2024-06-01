
const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://wayzodedeepak:glShtDR6cMAg56l7@cluster0.tyziqdd.mongodb.net/wayzodeFamily?retryWrites=true&w=majority&appName=Cluster0")

module.exports = {
    connection
}


