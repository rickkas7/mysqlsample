// Run this like:
// node mysqlsample.js
//
// Requires the following additional packages. From the directory containing mysqlsample.js, run:
// npm install particle-api-js mysql
//
// You must configure the authentication information for the Particle cloud and MySQL in the
// config.js file in the directory where this  

// Test database definition:
// CREATE TABLE test1(id INT NOT NULL AUTO_INCREMENT, a INT, PRIMARY KEY(id))

// You will need to customize the settings in the config.js file!
var config = require('./config.js');

// Particle cloud API 
var Particle = require('particle-api-js');
var particle = new Particle();

// https://github.com/mysqljs/mysql
var mysql      = require('mysql');

// Make database connection
console.log("starting database connection");
var connection = mysql.createConnection(config.mysql);
connection.connect();
	
// Make cloud connection
console.log("starting event stream listener");
particle.getEventStream({ deviceId: 'mine', auth: config.authToken }).then(
	function(stream) {
		stream.on('event', cloudEventHandler);
	},
	function(err) {
		console.log("error starting event listener", err);			
		process.exit(1);		
	});



cloudEventHandler = function(data) {
	// console.log("Event", data);

	if (data.name == 'mysqlSample1') {
		storeData(JSON.parse(data.data));
	}
}

function storeData(data) {
	console.log("storeData", data);
	
	connection.query('INSERT INTO test1 SET ?', {'a': data.a}, function(err, result) {
		if (err) throw err;

		console.log("id=" + result.insertId);
	});
}
