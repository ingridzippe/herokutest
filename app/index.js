require('dotenv').config();
const nodemailer = require("nodemailer");
var express = require("express");
var index = express();
var projects = require("../projects.json");
var exphbs = require("express-handlebars");
var path = require("path");
var bodyParser = require("body-parser");

index.use(bodyParser.urlencoded({extended: true}));
index.use(bodyParser.json());

index.use(express.static(path.join(__dirname, "/public")));

index.set("views", path.join(__dirname, "views"));
index.engine(".hbs", exphbs({
    extname: ".hbs",
    defaultLayout: false,
    helpers: require("../helpers")
}));
index.set("view engine", ".hbs");



index.get("/", function(req, res) {
    res.render("home");
});
index.get("/contact", function(req, res) {
    res.render("contact", {submitted: "no"});
});
index.get("/work", function(req, res) {
    res.render("work", {projects: projects});
});
index.get("/about", function(req, res) {
    res.render("about");
});
index.get("/project/:pid", function(req, res, next) {
    console.log("log projet id");
    console.log(req.params.pid);
    var pid = req.params.pid;
    var thisproject = projects[pid.toString()];
    console.log(thisproject);
    res.render("project", {project: thisproject});
});

// step 1 - transporter
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

index.post("/contact", function(req, res, next) {
    console.log("contact form posted");
    console.log(req.body);
    var name = req.body.fullname;
    var email = req.body.email;
    var note = req.body.note;
    var subject = req.body.subject;
    // step 2
    let mailOptions = {
        from: "izippe2020@gmail.com",
        to: "izippe2020@gmail.com",
        subject: req.body.subject,
        text: req.body.note,
        html: "<b>Full Name </b>" + name + "<br><b>Email </b>" + email + "<br><b>Message </b>" + note 
    };
    // step 3
    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            console.log("Error sending email.");
        } else {
            console.log("Email sent!")
            res.render("contact", {submitted: "yes"});
        }
    });
});




var port = process.env.PORT || 8080;
index.listen(port);
console.log("Express started. Listening on port %s", port);