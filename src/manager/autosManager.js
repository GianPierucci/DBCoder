import mongoose from "mongoose"

const schemaAutos = new mongoose.Schema({
    tipo: {type: String, required: true},
    marca: {type: String, required: true},
    modelo: {type: String, required: true},
    anio: {type: String, required: true},
    combustible: {type: String, required: true},
}, {versionKey: false})

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