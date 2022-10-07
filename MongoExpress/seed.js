const Product = require('./models/product');

const seed = [
    {
        name: 'Mango',
        price: 3.99,
        categories: 'fruit'
    },
    {
        name: 'Cabbage',
        price: 4.99,
        categories: 'vegetable'
    },
    {
        name: "Apple",
        price: 6.99,
        categories: 'fruit'
    },
    {
        name: 'Milk',
        price: 1.00,
        categories: 'dairy'
    },
    {
        name: 'Curd',
        price: 5.99,
        categories: 'dairy'
    }
];

Product.insertMany(seed).then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});