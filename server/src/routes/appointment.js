const express = require('express');
const mongoose = require('mongoose');
const Appointment = require('../models/appointment');

const appointmentRouter = express.Router();


// Route to book an appointment
appointmentRouter.post('/book-appointment', async (req, res) => {
    try {
        const { name, number, gender, mode } = req.body;

        // Validate input data
        // if (!name || !number || !gender || !mode) {
        //     return res.status(400).json({ error: 'All fields are required' });
        // }

        // Create a new appointment instance
        const newAppointment = new Appointment({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            number: number,
            gender: gender,
            mode: mode
        });

        // Save the appointment to the database
        const savedAppointment = await newAppointment.save();

        // Send a success response
        res.status(201).json({ message: 'Appointment booked successfully', appointment: savedAppointment });
    } catch (error) {
        // Send a 500 status code for server errors
        res.status(500).json({ error: error.message });
    }
});

// Route to get all appointments
appointmentRouter.get('/get-appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();

        // Send the list of appointments
        res.status(200).json(appointments);
    } catch (error) {
        // Send a 500 status code for server errors
        res.status(500).json({ error: error.message });
    }
});

module.exports = appointmentRouter;
