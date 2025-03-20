import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        const uri = process.env.MONGO_URI
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");  
    } catch (error) { 
        console.log("Error connecting to MongoDB", error.message);
    }
};
export default connectToMongoDB;