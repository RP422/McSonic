var express = require('express'), 
		pug = require('pug'),
		path = require('path'),
		config = require('./config');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/:menuCategory', function(req, res) {
	
	var submenu;
	
	if(req.params.page == "burgers") {
		submenu = config.menu.burgers;
	}
	else if (req.params.page == "sides") {
		submenu = config.menu.sides;
	}
	else if (req.params.page == "desserts") {
		submenu = config.menu.desserts
	}
	else {
		// 404 redirect
	}
	
	res.render(req.params.page, 
						 {title: req.params.page,
							menu: summenu
						 });
});

app.listen(3000);