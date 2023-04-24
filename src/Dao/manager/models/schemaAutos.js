import mongoose from "mongoose";

export const schemaAutos = new mongoose.Schema({
    tipo: { type: String },
    marca: { type: String },
    modelo: { type: String },
    anio: { type: Number },
    combustible: { type: String },
}, { versionKey: false });
