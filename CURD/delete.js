const shoes = require('../../db').shoes;
shoes.deleteMany({

}, function(err, result) {
    console.log(err);
    console.log(result);


})