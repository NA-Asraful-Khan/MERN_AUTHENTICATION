require('dotenv').config({path: "./config.env"})
const express = require('express')
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error')

//Connect DB


const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
//Last error handler
app.use(errorHandler);



app.get('/', (req, res) => {
    res.send("Success")
})

const server = app.listen(port, () => {
    console.log(`My Web site is running on port: ${port}`)
})

process.on("unhandledRejection",(err,pronise) => {
    console.log(`Logged Error: ${err}`);
    server.close(()=> process.exit(1));
})
