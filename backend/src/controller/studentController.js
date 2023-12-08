const client = require('../db/database');


const getStudents = (req, res) => {
    client.query('SELECT * FROM students', (err, results) => {
        if (err) {
            console.log(err.stack);
        } else {
            res.send(results.rows);
        }
    });
};

const getstudentId = (req, res) => {
    client.query('SELECT * FROM students WHERE student_id = $1', [req.params.student_id], (err, results) => {
        if (err) {
            console.log(err.stack);
        } else {
            res.send(results.rows);
        }
    });
};

const addStudent = (req, res) => {
    client.query('INSERT INTO students (student_name, g_crime, g_mystery, g_thriller, a_time, d_level) VALUES ($1, $2, $3, $4, $5, $6)', [req.body.student_name, req.body.g_crime, req.body.g_mystery, req.body.g_thriller, req.body.a_time, req.body.d_level], (err, results) => {
        if (err) {
            console.log(err.stack);
        } else {
            res.send(results.rows);
        }
    });
};

module.exports = {
    getStudents,
    getstudentId,
    addStudent,
};