var express = require('express');
var router = express.Router();

router.get("/second", function(request,response){
	response.render("second")});

router.get("/", function(request,response){
	response.render("index", {person: [
		
		{name: ''},
		
		]});
		
});

router.get("/", function(request,response){
	response.render("index", {person: [
		
		{age: ''},
		
		]});
		
});

router.get("/", function(request,response){
	response.render("index", {person: [

		{sign: ''}
		
		]});
		
});

router.get('/test', function(
	request, response){
	response.json('test worked')
});
module.exports = router;

