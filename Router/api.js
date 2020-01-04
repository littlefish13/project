const Router = require('express').Router();
const products = require('../db').products;

// 响应数据接口

Router.get('/data', function(req, res) {
    let {
        page = 1,
            pageSize = 15,
            tosort,
            isdiscount,
            attr, //品牌
            style,
            txt,
            type,
            id
    } = req.query;

    //排序
    let sort = {};
    if (tosort == 1 | tosort == -1) {
        sort.price = tosort
    }

    let condiction = {}; //初始条件
    if (attr) {
        condiction['attr'] = attr
    }
    if (style) {
        condiction['style'] = style
    }
    if (txt) {
        txt = new RegExp(txt, 'g')
        condiction['name'] = txt
    }
    if (isdiscount) {
        condiction['isdiscount'] = isdiscount
    }
    if (id) {
        condiction['id'] = id
    }





    products.find(condiction, [], { sort }, function(err, docs) {
        let totalPage = Math.ceil(docs.length / pageSize);
        let list = docs.slice((page - 1) * pageSize, page * pageSize);
        res.jsonp({
            data: {
                totalPage,
                list,
            }
        })
    })
})


Router.get('/item', function(req, res) {
    console.log(req.query)
    products.find({
            id: req.query.id * 1
        },
        function(err, docs) {
            console.log(!!docs && !!docs[0]);

            if (!!docs && !!docs[0]) {
                res.jsonp({
                    msg: 'success',
                    code: 10001,
                    data: docs
                });
            } else {
                res.jsonp({
                    msg: '没有',
                    code: 10002
                });
            }
        })
})




module.exports = Router;