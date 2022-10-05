const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shopApp')
        .then(() => {
            console.log("Connection open..");
        })
        .catch(err => {
            console.log(err);
        })


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
 });

// productSchema.methods.greet = function(){
//     console.log("Hello World..");
//     console.log(`- from ${this.name}`);
// }

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

const Product = mongoose.model('Product', productSchema);



// const bike = new Product({name: 'Mountain bike', price: '999'});

// bike.save()
//     .then(data => {
//         console.log("It worked..");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("ERROR Occured..");
//         console.log(err);
//     })


// const products = new Product({name: "Jacket", price: 455});

// products.save()
//         .then(data => {
//             console.log("Saved..");
//             console.log(data);
//         })
//         .catch(err => {
//             console.log(err);
//         })

// const findProduct = async () => {
//     const foundProduct = await Product.findOne({name: 'Mountain bike'});
//     foundProduct.greet();
// }

// findProduct();

const findProduct = async() => {
    const foundProduct = await Product.findOne({name: "Mountain bike"});
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
}

findProduct();