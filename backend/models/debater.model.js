const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const debaterSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    club: {
        type: String,
        required: true,
        trim: true
    },
    cvpoints: {
        type: Number,
        required: true,
    },
    game1:{
        type: Number,
        required: false,
    },
    game2:{
        type: Number,
        required: false,
    },
    game3:{
        type: Number,
        required: false,
    },
    game4:{
        type: Number,
        required: false,
    },
});



const Debater = mongoose.model('Debater', debaterSchema);

module.exports = Debater;