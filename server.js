var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
	title:'Article One |Shinas',
	heading:'Article One',
	date:'Sep 5,2016',
	content: `
		<p>
				This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
				This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
		</p>`
};
function createTemplate(data){
	var title = data.title;
	var heading = data.heading;
	var date =  data.date;
	var content =  data.content;
	var htmlTemplate = `
	<html>
		<head>
			<title>
				${title}
			</title>
			<meta name="viewport" content="width=device-width, initial-scale=1">
		</head>
		<body>
			<div class="container">
			<div>
				<a href="/">Home</a>
			</div>
			<hr/>
			<h3>
				${heading}
			</h3>
			<div>
				${date}
			</div>
			<div>
				<p>
				${content}
				</p>
			</div>
			</div>
		</body>

	</html>
	`;
	return htmlTemplate;
	
};



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(craeteTemplate(articleOne));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/mario.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mario.png'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});