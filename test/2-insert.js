const product = require('../db').product;
// const insert = require('./insert')



// module.exports = new Promise(async function(resolve, reject) {
//     let db = await product;
//     let shoes = db.collection('shoes')
//     shoes.insert({
//         name: "MiuMiu2",
//         color: "s",
//         size: 9,
//         price: 2200
//     }).then(function(res) {
//         console.log("yes", res);
//         resolve(res)
//     }).catch(function() {
//         console.log('fail', err);

//     })

// })
















async function fn() {
    let db = await product;
    let shoes = db.collection('shoes')



    shoes.insert({
        name: "MiuMiu2",
        color: "s",
        size: 9,
        price: 2200
    }).then(function(res) {
        console.log("yes", res);

    }).catch(function() {
        console.log('fail', err);

    })

}


fn()