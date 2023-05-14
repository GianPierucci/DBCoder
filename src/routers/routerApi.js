import { Router } from "express";
import { autosManager } from "../Dao/manager/autosManager.js";

export const routerApi = Router();

routerApi.post("/autos", async (req, res, next) => {
    
    const datosAutos = req.body
    const result = await autosManager.guardar(datosAutos)
    console.log(result);
    res.json(result);
});

