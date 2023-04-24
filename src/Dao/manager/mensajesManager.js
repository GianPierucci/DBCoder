import mongoose from "mongoose"
import { schemaMensajes } from "./models/schemaMensajes.js"

class MensajesManager {
    constructor() {
        this.mensajesDB = mongoose.model("Mensajes", schemaMensajes)
    }

    async guardar(datos){
        const mensajeGuardado = await this.mensajesDB.create(datos)
        return mensajeGuardado
    }
    async obtenerTodos(){
        const mensajes = await this.mensajesDB.find().lean()
        return mensajes
    }
}

export const mensajesManager = new MensajesManager()