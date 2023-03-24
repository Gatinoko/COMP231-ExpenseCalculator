const Users = require('../database/models/user')

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