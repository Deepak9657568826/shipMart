const express = require("express")
const  mongoose  = require("mongoose")

const app = express()

app.use(express.json())
app.use(express.text())



const PORT = process.env.PORT || 1234


app.listen(PORT, async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/shipmart")
        console.log("Connted to DB");
        console.log(`Server is running at port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})