import express from 'express'


const port = process.env.PORT || 3000
const app = express()
app.get('/', (req, res) => {
    res.json("Hello World")
})
app.listen(3000, (err) => {
    if (err) throw err;
    console.log("The server is running on port 3000")
})