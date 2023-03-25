const mongoose = require('mongoose'),
userRoles = require('../resources/userRoles')

// Not yet implemented into schema
const Expenses = {
        expenseName: String,
        expenseCost: Number,
        expenseDate: Date
};

// User schema
const UserSchema = new mongoose.Schema({
    roles: {
        type: Array,
        required: true,
        default: () => { return [ 1000 ] }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    expenses: Array
}, 
{
    collection: 'users'
});

// Method to validate user password on login
UserSchema.methods.isValidPassword = function(password) {
    const user = this
    const compare = (password === user.password)
    return compare
}

Users = mongoose.model('user', UserSchema);
module.exports = Users;