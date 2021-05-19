var express = require('express');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var session = require('express-session');
var app = express();

//DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once('open', function(){
    console.log('DB conected');
});
db.on('error', function(err){
    console.log('DB ERROR :', err);
});

//Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(flash());
app.use(session({secret:'MySecret', resave:true, saveUninitialized:true}));

//Routes
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts'));
app.use('/users', require('./routes/users'));

//port setting
var port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
});