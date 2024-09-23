const mongoose = require("mongoose")

const url = "mongodb+srv://sayyedameen0430:1234@cluster0.sso2p.mongodb.net/socialmediawebapp"

// connect to the database
 // asynchronous - return a promise
mongoose.connect(url)
.then(() => {
console.log("connect to database");

})
.catch((err) => {
console.log(err);

})

module.exports = mongoose; 
