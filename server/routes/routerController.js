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
    const valid = req.valid
    const message = req.alertMessage
    const messageType = req.messageType
    if (valid === true) {
        const formData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }
        const user = await Users.create(formData);
        return res.redirect('/register?' + `valid=${valid}&message=${message}&messageType=${messageType}`)
    }
    else {
        res.redirect('/register?' + `valid=${valid}&message=${message}&messageType=${messageType}`)
    }
}

// POST: http://localhost:4000/login
exports.postUserLogin = async (req, res) => {
    const valid = req.valid
    const message = req.alertMessage
    const messageType = req.messageType
    if (valid === true) {
        const token = jwt.sign(
            { 
                _id: req.user._id,
                user: req.user.username,
                email: req.user.email,
                roles: req.user.roles 
            }, 
            'TOP_SECRET'
        )
        res.cookie('token', token, { httpOnly: true })
        res.redirect(`/dashboard/${req.user._id}`)
    } else {
        res.redirect('/login?' + `valid=${valid}&message=${message}&messageType=${messageType}`)
    }
}

// GET: http://localhost:4000/logout
exports.getUserLogout = async (req, res) => {
    res.clearCookie('token')
    res.redirect('/')
}

