import mongoose from "mongoose"
import { schemaAutos } from "./models/schemaAutos.js"

class AutosManager {
    constructor() {
        this.autosDB = mongoose.model("Autos", schemaAutos)
    }

    async guardar(datosAutos){
        const autoGuardado = await this.autosDB.create(datosAutos)
        return autoGuardado
    }
    async obtenerTodos(){
        const autos = await this.autosDB.find().lean()
        return autos
    }
    async obtenerSegundId(id){
        const idAuto = await this.autosDB.findById(id).lean()
        return idAuto
    }
}

export const autosManager = new AutosManager()