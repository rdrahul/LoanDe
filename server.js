const 
	express = require('express'),
	path = require('path'),
	app = express(),
	mongoose = require('mongoose'),
	userRoute = require('./ServerSide/routes/users.route'),
	bodyParser = require('body-parser'),
	server = require('http').createServer(app),
	socket = require('socket.io');

const port = 3000;
const ConnectionString = "mongodb://127.0.0.1/loan-de";

app.use( express.static( path.join(__dirname , 'dist')) );

//set up database
mongoose.connect(ConnectionString, {}, (err) => {
	if (err) return console.log("[Error]",err);
});


let db = mongoose.connection;
db.on('error', () => {
	throw new Error("Unable to connect to database");
});

db.on('connection', () => {
	console.log("Connection to database successfull");
});


//set up body parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


console.log("Server listening on port : " + port);


//setting up the socket io
let io = socket(server);
io.on('connection' , function( socket){
	console.log( 'User connected');
	
	socket.on('disconnect' , function(){
		console.log('User disconnected');
	});

	socket.on('save-message' , function(data){
		console.log(data);
		io.emit('message' , { message : "Sending from backend" });		
	});

});


//set up route
initializeSocket(io );
userRoute( app , io  );

app.all('*', (req, res) => {
	console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
	res.status(200).sendFile(path.join(__dirname , 'dist/index.html'));	
});

server.listen( port); 