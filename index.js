// console.log("Hello")
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routers/user.router";
import fs from "fs";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// const corsOptions = {
//   // origin: [process.env.REACT_URL1],
//   optionsSuccessStatus: 200,
// };

app.use(cors());

app.use(express.static(__dirname));

//create application/json parser
app.use(bodyParser.json());
//create application/x-ww-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

process.env.MONGO_URL =
  "mongodb+srv://khantam710:Tam123@cluster0.cidj3bf.mongodb.net/registration";

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to Server!`))
  .catch((error) =>
    console.error(`Error connecting to database: ${error.message}`)
  );

app.use("/registration/user", userRouter);
