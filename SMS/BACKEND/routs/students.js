const router = require("express").Router();
const { response, request } = require("express");
let Student = require("../models/student");

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    });
    newStudent.save().then(() => {
        res.json("student added")
    }).catch((err) => {
        console.log(err);
    });
});

router.route("/").get((req, res) => {
    Student.find().then((students) => {
        res.json(students);
    }).catch((err) => {
        console.log(err);
    })
});

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { name, age, gender } = req.body; //destructure method

    const updateStudent = {
        name,
        age,
        gender
    }
    console.log(userId);
    const update = await Student.findByIdAndUpdate(userId, updateStudent)
        .then(() => {
            res.status(200).send({ status: "user updated successfully" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "error", error: err.message })
        })
});

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "user deleted" });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "error", error: err.message });
        })
});

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Student.findById(userId)
        .then((student) => {
            res.status(200).send({ status: "user found", student })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "error", error: err.message });
        })
});

module.exports = router;