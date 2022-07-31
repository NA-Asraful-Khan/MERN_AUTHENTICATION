require('dotenv').config({path: "./config.env"})
const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Success")
})

app.listen(port, () => {
    console.log(`My Web site is running on port: ${port}`)
})
