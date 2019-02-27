const Day = require('../models/day');
const User = require('../models/user');

module.exports = (app) => {

    // INDEX
        app.get('/', (req, res) => {
            var currentUser = req.user;
            // res.render('home', {});
            console.log(req.cookies);
            Day.find().populate('author')
            .then(days => {
                console.log(days)
                res.render('days-index', { days, currentUser });
                // res.render('home', {});
            }).catch(err => {
                console.log(err.message);
            })
        })

    // GET NEW DAY FORM
    app.get('/days/new', (req, res) => {
        res.render('days-new');
    })

    // CREATE
        app.post("/days/new", (req, res) => {
            if (req.user) {
                var day = new Day(req.body);
                day.author = req.user._id;
                day.upVotes = [];
                day.downVotes = [];
                day.voteScore = 0;


                day
                    .save()
                    .then(day => {
                        return User.findById(req.user._id);
                    })
                    .then(user => {
                        user.days.unshift(day);
                        user.save();
                        // REDIRECT TO THE NEW DAY
                        res.redirect(`/days/${day._id}`);
                    })
                    .catch(err => {
                        console.log(err.message);
                    });
            } else {
                return res.status(401); // UNAUTHORIZED
            }
        });

        // SHOW
        app.get("/days/:id", function (req, res) {
            var currentUser = req.user;
            Day.findById(req.params.id).populate('ins'&&'outs').lean()
            // Day.findById(req.params.id).populate('outs').lean()
                .then(day => {
                    res.render("days-show", { day, currentUser });
                })
                .catch(err => {
                    console.log(err.message);
                });
        });

        // SUBREDDIT
        app.get("/n/:subreddit", function (req, res) {
            var currentUser = req.user;
            Day.find({ subreddit: req.params.subreddit }).lean()
                .then(days => {
                    res.render("days-index", { days, currentUser });
                })
                .catch(err => {
                    console.log(err);
                });
        });

        app.put("/days/:id/vote-up", function(req, res) {
  Day.findById(req.params.id).exec(function(err, day) {
    day.upVotes.push(req.user._id);
    day.voteScore = day.voteScore + 1;
    day.save();
    // res.redirect('/')
    res.status(200);
  });
});

app.put("/days/:id/vote-down", function(req, res) {
  Day.findById(req.params.id).exec(function(err, day) {
    day.downVotes.push(req.user._id);
    day.voteScore = day.voteScore - 1;
    day.save();

    res.status(200);
  });
});

};

//
// STRETCH CHALLENGE!!
// Can you make an author's username a link that displays that users's profile at /users/:username?
// Can you do the same for comments?
// Can you make a /profile route that loads the current user and displays their days and comments?
