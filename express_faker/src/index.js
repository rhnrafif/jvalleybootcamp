import express from "express";
import dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT;
const app = express();

///middleware
app.use(express.json())

//route
app.get("/api/users", (req, res)=>{
    res.send("Berhasil konnect");
})

//listener
app.listen(PORT, ()=>{
    console.info("Server berhasil dijalankan..")
})