const express = require("express")
const Userrouter = require('./routers/UserRouter')
const post = require('./routers/PostRouter')
const cors = require("cors")
const app = express()
const port = 5000

// middleware

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use('/user', Userrouter)
app.use('/post', post)

app.get("/", (req, res) => {
    res.send('hello world')
    // console.log(req);
})

app.listen(port, () => {
    console.log("server started");
})