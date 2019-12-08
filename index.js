//FileName: index.js
// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;


// Server html page
app.use(express.static('public'))
// Use Api routes in the App
app.use('/api', apiRoutes);

app.get('/lew', function(req,res){
    res.json({
        value:6
    });
})


// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});


