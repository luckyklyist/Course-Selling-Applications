import { Request, Response } from "express";
import Course from "../models/course.model";

const createCourse = async (req: Request, res: Response) => {
    try {
        const { courseName, price, author } = req.body;
        const newCourse = await Course.create({ courseName, price, author });
        return res.status(201).json(newCourse);
    } catch (err) {
        console.error("Error creating course:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await Course.find();
        return res.status(200).json(courses);
    } catch (err) {
        console.error("Error getting courses:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getCourseById = async (req: Request, res: Response) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res.status(200).json(course);
    } catch (err) {
        console.error("Error getting course:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const updateCourseById = async (req: Request, res: Response) => {
    try {
        const courseId = req.params.id;
        const { courseName, price, author } = req.body;
        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            { courseName, price, author },
            { new: true } // Return the updated document
        );
        if (!updatedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res.status(200).json(updatedCourse);
    } catch (err) {
        console.error("Error updating course:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const deleteCourseById = async (req: Request, res: Response) => {
    try {
        const courseId = req.params.id;
        const deletedCourse = await Course.findByIdAndDelete(courseId);
        if (!deletedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res.status(200).json({ message: "Course deleted successfully" });
    } catch (err) {
        console.error("Error deleting course:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export { createCourse, getAllCourses, getCourseById, updateCourseById, deleteCourseById };
