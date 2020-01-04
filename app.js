var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Router = require('./Router');
var app = express();

// 服务器模块配置
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 静态中间件
app.use(express.static('public'));
// 路由模块
app.use(Router);

module.exports = app;
