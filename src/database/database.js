import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database connected !!! Host: ${connectionInstance.connection.host} / ${connectionInstance.connection.name}`);
    } catch (error) {
        console.log(`Error while connecting to database ${error.message}`);
        process.exit(1);
    }
}

export { connectDB }