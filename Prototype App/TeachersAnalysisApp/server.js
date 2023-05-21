const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "teachersdb",
});

const app = express(); 
app.use(cors());
app.listen(3000, function () {
    console.log("Server is running on Port 3000");
});

app.get('/data', function (req, result) {
    //SQL command for reading data
    let q = ` SELECT c.CourseId, c.title AS CourseTitle, l.LecturerId, l.LecturerName AS LecturerName, AVG(sc.marks) AS AverageMarks
    FROM courses c
    JOIN lecturers l ON c.LecturerId = l.LecturerId
    JOIN studentscourses sc ON c.CourseId = sc.courseId
    GROUP BY c.CourseId, l.LecturerId
    ORDER BY l.LecturerID,c.CourseId;
    `;
    con.query(q, function (err, res) {
        if (err) {
            console.log(err, "Cannot Get Data!")
        }
        if (res.length > 0) {
            result.send({
                data: res
            });
            console.log("Fetched");
        }
    });
});

app.get('/data2', function (req, result) {
    //SQL command for reading data
    let q = `SELECT  l.LecturerId, l.LecturerName AS LecturerName, AVG(sc.marks) AS AverageMarks
    FROM courses c
    JOIN lecturers l ON c.LecturerId = l.LecturerId
    JOIN studentscourses sc ON c.CourseId = sc.courseId
    GROUP BY l.LecturerId
    ORDER BY l.LecturerID,c.CourseId;
    `;
    con.query(q, function (err, res) {
        if (err) {
            console.log(err, "Cannot Get Data!")
        }
        if (res.length > 0) {
            result.send({
                data: res
            });
           
        }
    });
});


app.get('/courses', function (req, result) {
    //SQL command for reading data
    let q = `SELECT courseID, title as courseTitle, lecturerName FROM courses c
    join lecturers on lecturers.LecturerID = c.LecturerID
        ORDER BY lecturers.LecturerID,c.CourseId;
    `;
    con.query(q, function (err, res) {
        if (err) {
            console.log(err, "Cannot Get Data!")
        }
        if (res.length > 0) {
            result.send({
                data: res
            });
           
        }
    });
});


app.get('/lecturers', function (req, result) {
    let q = `SELECT lecturerID,lecturerName, Date(joiningDate) as joiningDate FROM lecturers l
    ORDER BY l.lecturerId;
    `;
    con.query(q, function (err, res) {
        if (err) {
            console.log(err, "Cannot Get Data!")
        }
        if (res.length > 0) {
            result.send({
                data: res
            });
           
        }
    });
});
