const shoes = require('../db').shoes

let condition = {
    $or: [
        { name: /long/ },
        { price: 3000 }
    ]

}

let filter={
    sort:{
        price:-1
    }
}


shoes.find(condition, ['name', 'price'], function(err, docs) {
    console.log(docs);

})