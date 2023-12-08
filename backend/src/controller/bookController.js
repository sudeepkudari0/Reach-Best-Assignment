const client = require('../db/database');

const getBooks = (req, res) => {
    client.query('SELECT * FROM books', (err, results) => {
        if (err) {
            console.log(err.stack);
        } else {
            res.send(results.rows);
        }
    });
};

const getbookId = (req, res) => {
    client.query('SELECT * FROM books WHERE book_id = $1', [req.params.book_id], (err, results) => {
        if (err) {
            console.log(err.stack);
        } else {
            res.send(results.rows);
        }
    });
};

const addbook = (req, res) => {
    client.query('INSERT INTO books (book_name, g_crime, g_mystery, g_thriller, a_time, d_level) VALUES ($1, $2, $3, $4, $5, $6)', [req.body.book_name, req.body.g_crime, req.body.g_mystery, req.body.g_thriller, req.body.a_time, req.body.d_level], (err, results) => {
        if (err) {
            console.log(err.stack);
        } else {
            res.send(results.rows);
        }
    });
};
module.exports = {
    getBooks,
    getbookId,
    addbook,
};