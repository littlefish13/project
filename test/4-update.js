const product = require('../db').product;


async function fn() {
    let db = await product;
    let shoes = db.collection('shoes')

    shoes.updateMany({

    }, {
        $set: {
            price: 23333
        }
    }).then(function(res) {
        console.log("yes", res);

    }).catch(function(err) {
        console.log('fail', err);
    })




}

fn()