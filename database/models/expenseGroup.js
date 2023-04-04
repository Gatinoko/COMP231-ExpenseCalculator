const mongoose = require("mongoose"),
ExpenseSchema = require("./expense");

const ExpenseGroupSchema = new mongoose.Schema({
    groupName: {
        type: String
    },
    expenses: Array(ExpenseSchema),
},
{
    collection: "expenseGroups"
});

module.exports = ExpenseGroupSchema;