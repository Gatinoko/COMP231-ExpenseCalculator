const passport = require('passport'),
jwt = require('jsonwebtoken')

// Registration authentication function
exports.registrationAuth = passport.authenticate('registration', { session: false })

// Login authentication function
exports.loginAuth = (req, res) => {
    passport.authenticate('login', 
        async (err, user, info) => {
            try {
                if (err || !user) {
                    return res.json({ error: err })
                }
                req.login(
                    user, 
                    { session: false },
                    async (error) => {
                        if (error) return error

                        const formData = { _id: user._id, email: user.email }
                        const token = jwt.sign({ user: formData }, 'TOP_SECRET')

                        return res.json({ token })
                    }
                )
            } catch(error) {
                res.json(error)
            }
        }
    )(req, res)
}