const Router = require('express').Router();
const api = require('./api');
const client = require('./client');

// 集合数据

const products = require('./products/products');






// 子路由模块
Router.use('/', api); // 通用的数据接口

Router.use('/products', products);




Router.use(client); // Web 页面响应 - 主要是模板引擎

module.exports = Router;