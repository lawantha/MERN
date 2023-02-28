import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllStudents() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        function getStudent() {
            axios.get('http://localhost:8070/student/').then((res) => {
                setStudents(Object.values(res.data))
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudent();
    }, []);

    return students.map((std) => {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{std.name}</h5>
                        <p className="card-text">{std.age}</p>
                        <p className="card-text">{std.gender}</p>
                    </div>
                </div>
            </div>
        )
    });
}