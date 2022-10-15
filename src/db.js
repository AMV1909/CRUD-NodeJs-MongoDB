import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongodbConnection = mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.log(err));

export { mongodbConnection };