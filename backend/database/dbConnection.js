import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = () => {
    mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("MongoDB Connected Successfully!");
            console.log("Database:", mongoose.connection.name);
        })
        .catch((error) => {
            console.log(`Failed to connect ${error}`);
        });
};

export default dbConnection;