import mongoose from "mongoose"
import autosModel from "./models/schemaAutos.js"

class AutosManager {
    constructor() {
        this.autosDB = autosModel
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

    async eliminarTodos(){
        const eliminar = await this.autosDB.deleteMany({})
        return eliminar
    }
}

export const autosManager = new AutosManager()