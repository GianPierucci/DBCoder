import { Router } from "express";
import { autosManager } from "../Dao/manager/autosManager.js";
import { mensajesManager } from "../Dao/manager/mensajesManager.js";


export const routerApi = Router();

routerApi.post("/autos", async (req, res, next) => {
    
    const datosAutos = req.body
    const result = await autosManager.guardar(datosAutos)
    console.log(result);
    res.json(result);
});

routerApi.post("/mensajes", async(req, res) => {
    const datosMsjs = req.body
    const result = await mensajesManager.guardar(datosMsjs)
    console.log(result);
    res.json(result)
})
