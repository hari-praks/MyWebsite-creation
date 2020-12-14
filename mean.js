var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var MongoClient = require('mongodb').MongoClient;
app.use(express.static(__dirname + "/public"));
app.get('/', function (req, res) {
res.sendFile( __dirname + "/" + "login1.html" );})



app.get('/project.html',function(req,res){
	res.sendFile( __dirname + "/" + "project.html" );
	
})


app.post('/process_post',urlencodedParser, function (req, res) {
// Prepare output in JSON format
response = { UserID:req.body.userid, Password:req.body.pwd, };
console.log(req.body)
res.redirect('/project.html')
MongoClient.connect('mongodb://localhost:27017/', function(err, db)
	{ if (err) throw err;
		console.log("Connected to Database");
		var dbo=db.db("mydb");
		dbo.collection('logindetails').insert(response, function(err, result)
			{ if (err) throw err;
				console.log("1 document inserted in your mongodb database" ); });});
				console.log(response); // display in node console window
				res.end(JSON.stringify(response));})
				var server = app.listen(8080, function () {
					var host = server.address().address
					var port = server.address().port
					console.log("Example app listening at http://%s:%s//", host,port)}) 

