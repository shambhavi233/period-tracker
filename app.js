const express = require('express');
const cors=require("cors");
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mihika@185',
    database: 'period_tracker',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/appointments', (req, res) => {
    const { name, email, date} = req.body;
    const query = 'INSERT INTO register (name, email, date) VALUES (?, ?, ?)';

    connection.query(query, [name, email, date], (error, results) => {
        if (error) {
            res.status(500).json({ success: false, error: error.message });
            return;
        }

        res.json({ success: true, appointment: { id: results.insertId, name, email, date} });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//done