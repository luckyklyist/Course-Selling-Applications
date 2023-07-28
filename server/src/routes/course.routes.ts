import express from "express";
import {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById,
} from "../controllers/course.controllers";

const router = express.Router();

router.post("/courses", createCourse);
router.get("/courses", getAllCourses);
router.get("/courses/:id", getCourseById);
router.put("/courses/:id", updateCourseById);
router.delete("/courses/:id", deleteCourseById);

export default router;
