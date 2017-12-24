var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'friday',
	database: 'burgers_db'
});

connection.connection(err => {
	if (err) {
		console.log('Error connecting: ' + err);
		return;
	}
	console.log('Connected as ID ' + connection.threadId);
});

module.exports = connection;