import express from "express";
import { siswa_create, siswa_read } from "../controllers/siswa_controller";

const siswa_routes = express.Router();

//route create siswa
siswa_routes.post("/api/siswa/create", siswa_create );

//route read siswa
siswa_routes.get("api/siswa/read", siswa_read);

export default siswa_routes;