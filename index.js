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

app.get('/menu/:menuCategory', function(req, res) {
	
	var submenu;
	
	if(req.params.menuCategory == "burgers") {
		submenu = config.menu.burgers;
	}
	else if (req.params.menuCategory == "sides") {
		submenu = config.menu.sides;
	}
	else if (req.params.menuCategory == "desserts") {
		submenu = config.menu.desserts;
	}
	else {
		// 404 redirect
		throw '404 - Page not found';
	}
	
	res.render(req.params.page, 
						 {title: req.params.page,
							menu: summenu
						 });
});

app.get('/:page', function(req, res){
	console.log(req.params.page)
	res.render(req.params.page, {title: req.params.page, config: config})
});

app.listen(3000);
