var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {

	'article-one':{
		title:'Article One |Shinas',
		heading:'Article One',
		date:'Sep 5,2016',
		content: `
			<p>
					This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
					This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
			</p>`
	},
	'article-two':{
		title:'Article Two |Shinas',
		heading:'Article Two',
		date:'Sep 7,2016',
		content: `
			<p>
					This is Article Two.This is Article Two.This is Article one.This is Article one.This is Article one.This is Article one.
					This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
			</p>`
	},
	'article-three':{
		title:'Article Three |Shinas',
		heading:'Article Three',
		date:'Sep 9,2016',
		content: `
			<p>
					This is Article Three.This is Article Three.This is Article one.This is Article one.This is Article one.This is Article one.
					This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.
			</p>`
	},
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
			<link href="/ui/style.css" rel="stylesheet" />
			
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
	
}







app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
counter = 0;
app.get('/counter', function (req, res) {
  counter = counter +1;
  res.send(counter.toString());
});
var names = [];
app.get('/submit-name', function (req, res) {
	var name = req.query.name;
	names.push(name);
	res.send(JSON.stringify(names));
});
app.get('/:articleName', function (req, res) {
	var articleName = req.params.articleName;
	
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`Imad  on port ${port}!`);
});
