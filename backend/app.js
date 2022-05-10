var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const history = require('connect-history-api-fallback'); 
// 서버 다른주소로 이동시에 뜨는 에러를 프론트로 보내주기위한 connect-history-api-fallback 모듈

var indexRouter = require('./routes/index');

const apiMemoRouter = require('./routes/apimemo'); // apimemo.js를 들고옴

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(history()); // connect-history-api-fallback 모듈 사용


app.use('/', indexRouter);
app.use('/api/memo/', apiMemoRouter); // 들고온 apimemo.js 의 주소들은 /api/memo/ 와 같음 #2 @2

module.exports = app;
