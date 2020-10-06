const express = require('express')
const index = express()
const path = require('path')
const exphbs = require("express-handlebars")
const PORT = process.env.PORT || 5000

index.use(express.static(path.join(__dirname, 'public')))
index.set('views', path.join(__dirname, 'views'))
// index.engine(".hbs", exphbs({
//     extname: ".hbs",
//     defaultLayout: false
// }))
index.set('view engine', 'ejs')
index.get('/', (req, res) => res.send("home"))
index.listen(PORT, () => console.log(`Listening on ${ PORT }`))


//   require('dotenv').config();
// const nodemailer = require("nodemailer");
// var express = require("express");
// var index = express();
// var projects = require("./projects.json");
// var exphbs = require("express-handlebars");
// var path = require("path");
// var bodyParser = require("body-parser");

// index.use(bodyParser.urlencoded({extended: true}));
// index.use(bodyParser.json());

// index.use(express.static(path.join(__dirname, "/public")));

// index.set("views", path.join(__dirname, "views"));
// index.engine(".hbs", exphbs({
//     extname: ".hbs",
//     defaultLayout: false,
//     helpers: require("./helpers")
// }));
// index.set("view engine", ".hbs");


// index.use(bodyParser.urlencoded({extended: true}));
// index.use(bodyParser.json());

// index.use(express.static(path.join(__dirname, "/public")));

// index.set("views", path.join(__dirname, "views"));
// index.engine(".hbs", exphbs({
//     extname: ".hbs",
//     defaultLayout: false,
//     helpers: require("./helpers")
// }));
// index.set("view engine", ".hbs");
  
  

// var port = process.env.PORT || 8080;
// index.listen(port);
// console.log("Express started. Listening on port %s", port);
