var express = require('express'), 
		pug = require('pug'),
		path = require('path'),
		config = require('./config');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/:page', function(req, res) {
	res.render(req.params.page, 
						 {title: req.params.page,
							config: config
						 });
});

app.listen(3000);