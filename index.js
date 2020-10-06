const express = require('express')
// var index = express();
const exphbs = require("express-handlebars");
const path = require('path')
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000

express()
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .engine(".hbs", exphbs({
    extname: ".hbs",
    defaultLayout: false,
  }))
  .set('view engine', 'hbs')
  .get('/', (req, res) => res.render('home'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))




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
