import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const Course = mongoose.model("course", courseSchema);
export default Course;