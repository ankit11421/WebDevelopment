const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/farmStand")
//         .then(()=> {
//             console.log("Mongo Connection open");
//         })
//         .catch(err => {
//             console.log("Mongo connection error!!");
//             console.log(err);
//         });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
        min: 0
    },
    categories: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;