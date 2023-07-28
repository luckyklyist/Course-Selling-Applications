import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect(`mongodb://localhost:27017/course`);
        console.log("connected to the DB")
    }
    catch (err) {
        console.log(err);
    }
}

export default connectDB;
