const Router = require('express').Router()
const products = require('../../db').products

Router.get('/data', async function(req, res) {
    console.log(req.query);
    // let limit = req.query.pageSize * 1; //一页的数量
    // let skip = (req.query.page - 1) * req.query.pageSize
    let {
        txt,
        page,
        pageSize
    } = req.query
    let nameReg = new RegExp(txt, 'g')
    let limit = pageSize * 1;
    let skip = (page - 1) * pageSize
        //搜索条件
    let condition = {
        name: nameReg
    }
    let filter = {
        skip,
        limit
    }
    products.find(condition, [], filter, function(err, docs) {
        console.log(docs);
        res.jsonp(docs)
    });

})

module.exports = Router