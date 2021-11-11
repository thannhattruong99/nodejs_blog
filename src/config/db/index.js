const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev');
        console.log('Connect database succesfully!!');
    } catch (err) {
        console.log('Connect database fail!!!');
    }
}

module.exports = { connect };
