const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "gradesdb",
});

const app = express(); 
app.use(cors());
app.listen(3000, function () {
    console.log("Server is running on Port 3000");
});

app.get('/grades', function (req, result) {
    //SQL command for reading data
    let q = ` SELECT id,grade, Date(submssion_date), Date(due_date) from grades order by grade;;
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

