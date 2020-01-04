const mongoose = require('./connection')



let schema = mongoose.Schema({
    brand: String,
    attr: Number,
    type: String,
    subtype: String,
    name: String,
    quality: Number,

    annex: String,
    fit: String,
    publishdate: String,
    isdiscount: String,
    size: Number,
    images: [], //或Array或[String],
    updateDate: Date, //或Timestamp
    owner: Object, //或{}或{name:String}
    //other:Mixed//混合，允许所有的数据类型
    updateDate: {
        type: Date,
        default: Date.now()
    },
    price: {
        type: Number,
        min: 0,
        max: 100000
    },
    img: String,
    style: String
})



let tableName = 'products';
let dbModel = mongoose.model(tableName, schema)

module.exports = dbModel