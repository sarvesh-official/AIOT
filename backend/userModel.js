const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    userid: {
        type: String,
        required: true,
        unique: true
    },
    pfp: {
        type: String, 
        required: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
