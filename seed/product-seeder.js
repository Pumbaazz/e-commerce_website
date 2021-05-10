var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/ecommerce');

var product =
    [new Product({
    // imagePath:'"https://i1-giaitri.vnecdn.net/2015/04/13/Jason-Statham-buffed-Body-3549-1428911719.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=p_E_zXTquxdNPsegYrIlqg',
        product_name:'demo1',
        product_description:'demo1',
        remaining_stock: 90
    }),
    new Product({
        // imagePath:'"https://i1-giaitri.vnecdn.net/2015/04/13/Jason-Statham-buffed-Body-3549-1428911719.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=p_E_zXTquxdNPsegYrIlqg',
        product_name:'demo2',
        product_description:'demo2',
        remaining_stock: 902
    })];
//insert new product in db
for (var i = 0; i<product.length; i++){
    product[i].save();
}

mongoose.disconnect()