import React, { useState } from "react";
import axios from 'axios';

export default function AddStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newStudent = {
            name,
            age,
            gender
        }
        axios.post('http://localhost:8070/student/add', newStudent).then(() => {
            alert("Student added");
        }).catch((err) => {
            alert(err);
        });
    }
    return (
        <div className="container">
            <form onSubmit={sendData}>
                <div class="form-group">
                    <label for="name">Enter Name</label>
                    <input type="text" class="form-control" id="name" onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label for="age">Age</label>
                    <input type="text" className="form-control" id="age" onChange={(e) => {
                        setAge(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label for="gender">Gender</label>
                    <input type="text" className="form-control" id="gender" onChange={(e) => {
                        setGender(e.target.value);
                    }} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}