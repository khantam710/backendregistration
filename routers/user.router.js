import express from "express";
import { createUser, getAllUserData} from "../controllers/user.controller";
import { resumeUpload } from "../multer";

const userRouter = express.Router()

userRouter.post('/create', resumeUpload.single('resume'), createUser);
userRouter.get('/get-user',getAllUserData);

export default userRouter