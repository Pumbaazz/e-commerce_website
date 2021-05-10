var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    product_name: {type: String, required:true},
    product_description: {type: String, required:true},
    remaining_stock: {type: Number, required:true}
});



model.exports = mongoose.model('Product', schema)