// src/jobs/job.model.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  // title: String,
  // description: String,
  order: Number,
  // Add more fields as needed
});

const payment = mongoose.model('payment', paymentSchema);

module.exports = payment;
