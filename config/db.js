const mongoose = require('mongoose');

const local = "mongodb+srv://admin:iSSuDpNLwsxlyU1B@cluster84686.th2wh.mongodb.net/MD20101";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };