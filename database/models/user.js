const mongoose = require('mongoose')

// Not yet implemented into schema
const Expenses = {
        expenseName: String,
        expenseCost: Number,
        expenseDate: Date
};

// User schema
const UserSchema = new mongoose.Schema({
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
UserSchema.methods.isValidPassword = async (password) => {
    const user = this
    const compare = (password === user.password)
    return compare
}

Users = mongoose.model('user', UserSchema);
module.exports = Users;