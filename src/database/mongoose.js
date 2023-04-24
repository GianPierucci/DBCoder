import mongoose from "mongoose";

export async function conectar(){
    await mongoose.connect("mongodb+srv://gianpieru:asdasero3000@pieruccicoder.9gizydv.mongodb.net/?retryWrites=true&w=majority")
}

