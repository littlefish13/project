const product = require('../db').product;


async function fn() {
    let db = await product;
    let shoes = db.collection('shoes')
    shoes.find({}, async function(err, data) {
        let docs = await data.toArray()
        console.log(docs);
    })
}

fn()