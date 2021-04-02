'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _imgRoutes = require('./routes/imgRoutes');

var _imgRoutes2 = _interopRequireDefault(_imgRoutes);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();
var cors = require('cors');

var app = (0, _express2.default)();

var PORT = 4000;

app.use(cors());

app.get('/', function (req, res) {
  return res.send('Node & Express are running on port ' + PORT);
});
var mongo_un = process.env.Mongo_Db_Username;
var mongo_db = process.env.Mongo_Db_Database;
var mongo_pw = process.env.Mongo_Db_Password;

//mongoose connection
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb+srv://' + mongo_un + ':' + mongo_pw + '@cluster0.vjqxd.mongodb.net/' + mongo_db + '?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//bodyparser setup
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.json());

(0, _imgRoutes2.default)(app);

app.listen(PORT, function () {
  return console.log('Server is running on port ' + PORT);
});