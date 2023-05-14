import { Router } from "express";
import { autosManager } from "../Dao/manager/autosManager.js";
import autosModel from "../Dao/manager/models/schemaAutos.js";
import mongoose from "mongoose";

export const routerVistas = Router();


routerVistas.get("/", async (req, res, next) => {
    // const autos = await autosManager.obtenerTodos()

    const filtroBusq = { category: "Auto"}
    const opcionesDePag = {
        limit: req.params.limit ?? 2,
        page: req.params.page ?? 1,
        lean: true
    }

    let autosPag = await autosModel.paginate(filtroBusq, opcionesDePag)

    res.render("listadoAutos", {
        hayAutos: autosPag.docs.length > 0,
        autos: autosPag.docs,
        limit: autosPag.limit,
        page: autosPag.page,
        totalPages: autosPag.totalPages,
        hasNextPage: autosPag.hasNextPage,
        nextPage: autosPag.nextPage,
        hasPrevPage: autosPag.hasPrevPage,
        prevPage: autosPag.prevPage,
    })
    console.log(autosPag);
    // await autosModel.deleteMany({})
})

process.on("exit", async () => {
    await autosModel.deleteMany({})
})


