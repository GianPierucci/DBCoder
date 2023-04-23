import { Router } from "express";
import { autosManager } from "../manager/autosManager.js";

export const routerVistas = Router();

routerVistas.get("/autos", async (req, res, next) => {
    const autos = await autosManager.obtenerTodos()

    res.render("cargaAutos", {
        hayAutos: autos.length > 0,
        autos
    });
});
