const mongoose = require('mongoose'),
{ userRoles } = require('../resources/userRoles'),
ExpenseGroupSchema = require("./expenseGroup")

// User schema
const UserSchema = new mongoose.Schema({
    roles: {
        type: Array,
        required: true,
        default: () => { return [ userRoles.User ] }
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
    expenseGroups: {
        type: Array(ExpenseGroupSchema),
        default: () => {  
            return [ 
                { 
                    groupName: "Ungrouped",
                    expenses: [] 
                } 
            ] 
        }
    }
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