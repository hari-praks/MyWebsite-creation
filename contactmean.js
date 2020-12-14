var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var MongoClient = require('mongodb').MongoClient;
app.use(express.static(__dirname + "/public"));
app.get('/', function (req, res) {
res.sendFile( __dirname + "/" + "CONTACT2.html" );})


app.get('/project.html',function(req,res){
	res.sendFile( __dirname + "/" + "project.html" );
	
})

app.post('/post_contact',urlencodedParser, function (req, res) {
// Prepare output in JSON format
response = { Name:req.body.Name, Emailid:req.body.email, Subject:req.body.Subject,Message:req.body.message };
console.log(req.body)
res.redirect('/project.html')
MongoClient.connect('mongodb://localhost:27017/', function(err, db)
	{ if (err) throw err;
		console.log("Connected to Database");
		var dbo=db.db("mydb");
		dbo.collection('Contactus').insert(response, function(err, result)
			{ if (err) throw err;
				console.log("1 document inserted in your mongodb database" ); });});
				console.log(response); // display in node console window
				res.end(JSON.stringify(response));})
				

