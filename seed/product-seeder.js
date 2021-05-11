var Product = require('../models/product');
var mongoose = require('mongoose');

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
// insert new product in db
var done=0;
for (var i = 0; i<product.length;  i++){
    product[i].save(function (err, result){
        done++;
        if (done === product.length){
            exit();
        }
    });
}

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("ecommerce");
//     dbo.collection("mockup_data").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });



function exit(){
    mongoose.disconnect();
}