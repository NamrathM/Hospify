const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    _id: { type: String },
    name: {
        type: String,
        required: true
    },
    number:
    {
        type: String,
        length : 10,
        required: true
    },
    gender:
    {
        type: String,
        required: true
    },
    mode:
    {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now }
});



module.exports = mongoose.model('Appointment', appointmentSchema);
