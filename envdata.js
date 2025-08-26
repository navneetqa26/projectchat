require("dotenv").config({
    path: ".env"
});

// envdata.js
// This file is used to store login variables for Cypress tests
var envData = {
    email: process.env.EMAIL,   
    password: process.env.PASSWORD,
    baseUrl: process.env.BASEURL
    };

module.exports = envData;