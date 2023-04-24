import { Router } from "express";
import { autosManager } from "../Dao/manager/autosManager.js";
import { mensajesManager } from "../Dao/manager/mensajesManager.js";

export const routerVistas = Router();

routerVistas.get("/autos", async (req, res, next) => {
    const autos = await autosManager.obtenerTodos()

    res.render("cargaAutos", {
        hayAutos: autos.length > 0,
        autos
    });
});

routerVistas.get("/mensajes", async (req, res) => {
    const mensajes = await mensajesManager.obtenerTodos()

    res.render("chat", {
        hayMensajes: mensajes.length > 0,
        mensajes
    })
})