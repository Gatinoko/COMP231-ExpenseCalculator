const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://admin:addm@mongodbserver.wuso0.mongodb.net/test";

const connectMongodb = async (databaseName) => {
    try {
        const { connection } = await mongoose.connect(MONGO_URI, { dbName: databaseName });
        if (connection.readyState == 1) {
            console.log("MongoDb connected.");
        }
    } catch(errors) {
        return Promise.reject(errors);
    }
}

module.exports = connectMongodb;