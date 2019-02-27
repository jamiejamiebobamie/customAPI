const Day = require('../models/day');
const Out = require('../models/outs');


module.exports = function(app) {

        // CREATE Out
        app.post("/days/:dayId/outs", function (req, res) {
            const out = new Out(req.body);
            out.author = req.user._id;
            out
                .save()
                .then(out => {
                    return Promise.all([
                        Post.findById(req.params.dayId)
                    ]);
                })
                .then(([day, user]) => {
                    day.outs.unshift(out);
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
