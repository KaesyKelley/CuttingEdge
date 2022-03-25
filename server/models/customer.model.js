const { text } = require("express");
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    customerFirstName: {
        type: String,
        required: [true, "Customer name is required."],
        minLength: [2, "Customer must have minimum of two letters."]
    },

    customerLastName: {
        type: String,
        required: [true, "Customer name is required."],
        minLength: [2, "Customer must have minimum of two letters."]
    },

    customerEmail: {
        type: String,
    },

    customerPhoneNumber: {
        type: String,
        require: [true, "10 digit phone number is required."],
        minLength: [10, "Phone number must include area code"],
    },

    customerAddress: {
        type: String,
    },

    customerService: {
        type: Boolean,
    },

    customerStatus: {
        type: Boolean,
    },

    customerFormula: {
        type: Text,
    },

    homepage: String 
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;