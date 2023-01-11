const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    {
        FirstName: {type: String},
        LastName: {type: String},
        Emaill: {type: String, unique: true},
        UserName: {type: String, unique: true},
        Password: {type: String},
        Mobile: {type: String, unique: true},
        City: {type: String},
    },
    { versionKey: false }
);

const ProfileModel = mongoose.model("profile", DataSchema);
module.exports = ProfileModel;
