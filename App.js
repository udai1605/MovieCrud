const express = require('express');
const app = express();
const DbConnect = require('./Controllers/DbConnect')
const movieRoute = require('./routes/movieRoute')
require("./models/movieModel.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', movieRoute)
app.get('/', (req, res) => {
    res.send('API IS WORKING!!')
})

DbConnect()

app.listen(3000, () => {
    console.log("server running")
})