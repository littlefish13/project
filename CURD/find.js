const shoes = require('../../db').shoes
shoes.find({

}, function(err, docs) {
    console.log(err);
    console.log(docs);


})