const Day = require('../models/day');
const In = require('../models/ins');


module.exports = function(app) {

        // CREATE In
        app.post("/days/:dayId/ins", function (req, res) {
            const in = new In(req.body);
            in.author = req.user._id;
            in
                .save()
                .then(in => {
                    return Promise.all([
                        Post.findById(req.params.dayId)
                    ]);
                })
                .then(([day, user]) => {
                    day.ins.unshift(in);
                    return Promise.all([
                        day.save()
                    ]);
                })
                .then(day => {
                    res.redirect(`/days/${req.params.dayId}`);
                })
                .catch(err => {
                    console.log(err);
                });
        });
    };
