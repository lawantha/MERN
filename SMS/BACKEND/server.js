const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv")
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const url = process.env.MONGODB_URL;
// const url = "mongodb+srv://lawa:lawa1234@cluster1.n70harf.mongodb.net/student_db?retryWrites=true&w=majority";
console.log(url);
mongoose.connect(url, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection successful");
});

const studentRouter = require("./routs/students.js");

app.use("/student", studentRouter);

app.listen(PORT, () =>
    console.log(`server is up and running on port ${PORT}`));

