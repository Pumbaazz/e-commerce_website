var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var productSchema = new Schema({
    id:{type:String, required:true},
    url:{type: String, required:true},
    p_name: {type: String, required:true},
    p_desc: {type: String, required:true},
    quantity: {type: Number, required:true}
},{collection:'mockup'});

module.exports = mongoose.model('Product', productSchema)