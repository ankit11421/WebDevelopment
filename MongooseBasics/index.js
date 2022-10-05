const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movieApp')
        .then(() => {
            console.log("Connection Open!!!");
        })
        .catch(err => {
            console.log("Error!");
            console.log(err);
        })