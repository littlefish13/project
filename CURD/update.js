const shoes = require('../../db').shoes

shoes.updateMany({

}, {
    price: 889
}, function(err, result) {
    console.log(err);
    console.log(result);


})