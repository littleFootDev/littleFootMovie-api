import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const password = process.env.DATABASE_PASSWORD;
console.log(password);

async function databaseSetup() {
    const connected: boolean = await connectToDatabase();
    if(!connected) {
        process.exit(1);
    };
};

async function connectToDatabase() : Promise<boolean> {
    try {
        await mongoose.connect('mongodb+srv://littleFootDev:'+password+'@cluster0.c5sl5.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connecté à la database');
        
        return true;
    } catch (err) {
        console.log("erreur pendant la connection : ", err);
        return false;
    }
};

export {databaseSetup};