const mongoose = require('mongoose');
// const express = require('express') 
mongoose.set('strictQuery', true);

async function connectToMongoDB(url){
    return mongoose.connect(url);
}

module.exports = connectToMongoDB;