var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CryptoSchema   = new Schema({
    name: String,
    price: String,
});

module.exports = mongoose.model('Crypto', CryptoSchema, 'cryptos'); 