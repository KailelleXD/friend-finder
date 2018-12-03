var friendsData = require("../app/data/friends")

module.exports = function(app) {
    // Routes ////

    // GET route to '/api/friends' which displays a JSON of all possible friends.
    app.get("api/friends", function(req, res) {
        return res.json(friendsData);
    });

    // POST route to /api/friends (This is used to handle incoming survey results and compatability logic)
    app.post("api/friends", function(req, res) {

        // Takes the JSON information and posts it to the server.
        var newfriend = req.body;

        // Push newfriend to the friends array.
        friends.push(newfriend);
        
    });
};