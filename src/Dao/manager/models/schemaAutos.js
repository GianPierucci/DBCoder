import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const autosCollection = "vehiculos"

const schemaAutos = new mongoose.Schema({
    vehicle: { type: String },
    motor: { type: String },
    price: { type: Number },
    stock: { type: Number },
    category: {type: String}
}, { versionKey: false });


schemaAutos.plugin(mongoosePaginate)
const autosModel = mongoose.model(autosCollection, schemaAutos)

export default autosModel

