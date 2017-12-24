var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'friday',
	database: 'burgers_db'
});

connection.connect(err => {
	if (err) {
		console.log('Error connecting: ' + err);
		return;
	}
	console.log('Connected as ID ' + connection.threadId);
});

module.exports = connection;