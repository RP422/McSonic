var express = require('express'), 
		pug = require('pug'),
		path = require('path'),
		config = require('./config');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
  res.render('index', {title: "Homepage", config: config});
});

app.get('/:page', function(req, res){
	var submenu;
	
	if(req.params.page == "Burgers") {
		submenu = config.menu.burgers;
	}
	else if (req.params.page == "Sides") {
		submenu = config.menu.sides;
	}
	else if (req.params.page == "Desserts") {
		submenu = config.menu.desserts;
	}
	else {
		// 404 redirect
		throw '404 - Page not found';
	}
	
	console.log(req.params.page)
	res.render('menu', {title: req.params.page, config: config, submenu: submenu})
});

app.listen(3000);
