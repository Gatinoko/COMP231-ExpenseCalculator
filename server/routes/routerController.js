const Users = require('../../database/models/user'),
auth = require('../services/auth/auth'),
jwt = require('jsonwebtoken')


/*
    User type controllers
*/
// GET: http://localhost:4000/api/users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        if (!users) return res.json({ error: "Data not found." });
        else return res.json(users);
    } catch(error) {
        return res.json({error: "Error while fetching data."});
    }
}

// GET: http://localhost:4000/api/user/[:id]
exports.getUser = async (req, res) => {
    try {
        const userId = req.params._id;
        const user = await Users.findById(userId);
        if (!user) return res.json({ error: "Data not found." });
        else return res.json(user);
    } catch(error) {
        res.json({error: "Error while fetching data."});
    }
}

// POST: http://localhost:4000/register
exports.postUserRegistration = async (req, res) => {
    try {
        res.json({
            message: 'Registration successful.',
            user: req.user
        })
    } catch(error) {
        res.json({ error: 'Error while registering.' })
    }
}

exports.postUserLogin = async (req, res) => {
    const valid = req.valid
    const message = req.message
    if (valid === true) {
        const token = jwt.sign({ user: req.user }, 'TOP_SECRET')
        res.cookie('token', token, { httpOnly: true })
        res.redirect('/dashboard')
    } else {
        res.redirect('/login?' + `valid=${valid}&message=${message}`)
    }
}

exports.getUserLogout = async (req, res) => {
    res.clearCookie("jwt");
    res.redirect("/");
}
