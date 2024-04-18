import mongoose from "mongoose";

const connection = {}
export const connectToDb = async () => {
    try {
        if(connection.isConnected) {
            console.log("connected to mongodb");
            return;
        }
        const db = await mongoose.connect(process.env.MONGODB)
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
    }
}