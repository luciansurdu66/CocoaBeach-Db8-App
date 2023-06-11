const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const refereeSchema = new Schema({
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
});

const Referee = mongoose.model('Referee', refereeSchema);

module.exports = Referee;
