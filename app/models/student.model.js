
const mongoose = require('mongoose');

const StudentShema = mongoose.Schema({
    name: String,
    age : Number,
    major: String
},{
    timestamps: true
});

module.exports = mongoose.model('Student', StudentShema);
