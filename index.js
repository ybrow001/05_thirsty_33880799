// setup express and ejs
var express = require ('express');
var ejs = require('ejs');
var path = require("path");

// create the express application object
const app = express();
const port = 8000;

// create path to css stylesheet
app.use(express.static(path.join(__dirname, "public")));

// tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

// Set up the body parser 
app.use(express.urlencoded({ extended: true })); 

// load the route handlers
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

// start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`));