var express = require('express');
var bodyParser = require('body-parser');
const {dbConnection} = require("./db/config.js")
const teamRouter = require("./routes/team")
const playerRouter = require("./routes/players")
// const cors = require ("cors")

require('dotenv').config()
//Crear el servidor de express
const app = express();
//CORS
// app.use(cors())
//BASE DE DATOS
dbConnection();
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
app.use("/team",teamRouter);
app.use("/players",playerRouter);

app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:3000/');
});