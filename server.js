var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var exphbs = require('express-handlebars');
var router = require('./controllers/burgers_controller.js');

//Set up express server
var app = express();
var PORT = 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(process.cwd() + '/public'));
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded(
{
	extended: false
}));

app.use('/', router);

app.listen(process.env.PORT || PORT, function() 
{
	console.log("Listening on port 3000");
});

