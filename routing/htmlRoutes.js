// Dependencies ////
var path = require("path");

// Sets up the Express App ////
var path = require("path");

module.exports = function(app) {
    // Routes ////

    // GET route to '/survey' which displays survey.html.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../app/public/survey.html"));
    });

    // Default GET route, catch-all that leads to home.html
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../app/public/home.html"));
    });
};

