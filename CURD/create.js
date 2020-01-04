const shoes = require('../../db').shoes;
shoes.create({
    name: '凉鞋',
    price: Math.floor(Math.random() * 100),
    level: Math.floor(Math.random() * 5) + 1,

}, function(err, docs) {
    console.log(err);
    console.log(docs);


})