import mongoose from "mongoose";
import autosModel from "../Dao/manager/models/schemaAutos.js";

export async function conectar(){
    await mongoose.connect("mongodb+srv://gianpieru:asdasero3000@pieruccicoder.9gizydv.mongodb.net/?retryWrites=true&w=majority")
    await autosModel.insertMany([
        {   "vehicle":"Toyota Hilux",
            "motor":"Diesel 2.5l",
            "code":"",
            "price":20000,
            "status":true,
            "stock":6,
            "category":"Camioneta Pick Up"
        },
        {   "vehicle":"Toyota Corolla",
            "motor":"Diesel 2.0l",
            "code":"",
            "price":15000,
            "status":true,
            "stock":5,
            "category":"Auto"
        },
        {   "vehicle":"Honda Tornado",
            "motor":"Nafta 250cc",
            "code":"",
            "price":6000,
            "status":true,
            "stock":4,
            "category":"Moto"
        },
        {   "vehicle":"Volskwagen Amarok",
            "motor":"Diesel 2.5l",
            "code":"",
            "price":20000,
            "status":true,
            "stock":6,
            "category":"Camioneta Pick Up"
        },
        {   "vehicle":"Volskwagen Golf",
            "motor":"Diesel 2.0l",
            "code":"",
            "price":13000,
            "status":true,
            "stock":5,
            "category":"Auto"
        },
        {   "vehicle":"Honda Biz",
            "motor":"Nafta 125cc",
            "code":"",
            "price":3000,
            "status":true,
            "stock":5,
            "category":"Moto"
        },
        {   "vehicle":"Honda Wave",
            "motor":"Nafta 110cc",
            "code":"",
            "price":2500,
            "status":true,
            "stock":8,
            "category":"Moto"
        },
        {   "vehicle":"Toyota Etios",
            "motor":"Diesel 1.6l",
            "code":"",
            "price":10000,
            "status":true,
            "stock":7,
            "category":"Auto"
        },
        {   "vehicle":"Ford Ranger",
            "motor":"Diesel 2.5l",
            "code":"",
            "price":19000,
            "status":true,
            "stock":4,
            "category":"Camioneta Pick Up"
        },
        {   "vehicle":"Ford Fiesta",
            "motor":"Diesel 1.6l",
            "code":"",
            "price":14000,
            "status":true,
            "stock":5,
            "category":"Auto"
        },
        {   "vehicle":"Volskwagen Bora",
            "motor":"Diesel 1.8l",
            "code":"",
            "price":15000,
            "status":true,
            "stock":3,
            "category":"Auto"
        },
        {   "vehicle":"Honda Twister",
            "motor":"Nafta 250cc",
            "code":"",
            "price":5000,
            "status":true,
            "stock":3,
            "category":"Moto"
        },
        {   "vehicle":"Yamaha Lander",
            "motor":"Nafta 250cc",
            "code":"",
            "price":5000,
            "status":true,
            "stock":5,
            "category":"Moto"
        },
        {   "vehicle":"Chevrolet S10",
            "motor":"Diesel 2.5l",
            "code":"",
            "price":20000,
            "status":true,
            "stock":2,
            "category":"Camioneta Pick Up"
        },
        {   "vehicle":"Honda Titan",
            "motor":"Nafta 150cc",
            "code":"",
            "price":3000,
            "status":true,
            "stock":7,
            "category":"Moto"
        }
    ])
}

