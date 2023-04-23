import mongoose from "mongoose";

export async function conectar(){
    await mongoose.connect("mongodb://localhost/MarcaAutos")
}

