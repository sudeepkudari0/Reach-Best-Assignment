const express = require('express')
const studentRoutes = require('./src/routes/studentRoutes');
const bookRoutes = require('./src/routes/bookRoutes');
const client = require('./src/db/database');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors());
client.connect().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.error('Error connecting to database:', err);
});

app.get('/', (res, req)=>{
    req.send('Hello World');
});

app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/books', bookRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});