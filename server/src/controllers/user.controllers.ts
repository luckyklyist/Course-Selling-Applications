import express, { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        const checkUser = await User.findOne({ email: email });

        if (checkUser) {
            return res.send({ message: "User already exists " })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashPassword
        })
        await newUser.save();
        return res.send({ message: "User created successfully" })
    }
    catch (err) {
        res.send({ message: "error" + err })
    }
}

const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const checkUser = await User.findOne({ email: email });

        if (!checkUser) {
            return res.send({ message: "User dont exists" })
        }
        const checkPassoword = await bcrypt.compare(password, checkUser.password)

        if (checkPassoword) {
            const token = jwt.sign({userId:checkUser._id, userEmail:checkUser.email},"dfsdfdsfdsfdsf");
            return res.send({ message: token })
        }
        else {
            return res.send({ message: "Wrong password" })
        }
    }
    catch (err) {
        res.send({ message: "error" + err })
    }
}


export { createUser, loginUser };