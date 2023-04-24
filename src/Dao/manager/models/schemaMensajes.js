import mongoose from "mongoose";

export const schemaMensajes = new mongoose.Schema({
    nombreUs: { type: String },
    mensaje: { type: String }
}, { versionKey: false });
