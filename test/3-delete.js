const product = require('../db').product;


async function fn() {
    let db = await product;
    let shoes = db.collection('shoes')





    shoes.deleteMany({
        name: "MiuMiu2"

    }).then(function(res) {
        console.log('yes', res);

    }).catch(function(err) {

        console.log('fail', err);

    })

}

fn()