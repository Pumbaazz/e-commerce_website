var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var Product = new Schema({
    url:String,
    p_name: String,
    p_desc: String,
    quantity: Number
},{collection:'mockup'});

module.exports = mongoose.model('Product', Product)