import express from "express";
import env from "dotenv";
import siswa_routes from "./routes/siswa_routes";

//agar bisa membaca value dari file env
env.config();

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());

//route
app.use(siswa_routes);

app.listen(PORT, ()=>{
    console.info("Server berjalan..");
});