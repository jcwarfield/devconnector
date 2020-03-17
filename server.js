const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000; //environment variable for deployed app or 5000 locally

app.listen(PORT, () => console.log('Server started on port ${PORT}'));
