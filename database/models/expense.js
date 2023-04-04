const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    expenseName: String,
    expenseType: String,
    expenseCost: Number,
    expenseDate: String,
},
{
    collection: "expenses"
});

module.exports = ExpenseSchema;