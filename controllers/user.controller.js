const User = require('../models/user.model');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
exports.create_user = function (req, res) {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    let user = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password
    });
    user.save(function(err,user) {
        if(err) {
            return res.status(500).send("This user is already have")
        }
        res.json(user)
       // create a token
    var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    }); 
};

exports.login = function(req, res) {
    User.findOne({ email: req.body.username }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
        });
res.status(200).send({ auth: true, token: token });
    });
}
