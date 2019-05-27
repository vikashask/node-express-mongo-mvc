const mongoose = require('mongoose');

module.exports = (app) => {

    mongoose.Promise = global.Promise;

    mongoose.connect(process.env.MONGO_URL, { useMongoClient : true });

    mongoose.connection.on('connected', () => {
        app.emit('READY');
        console.log('connected to database.');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('connection disconnected.');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting database.');
        process.exit(1);
    })

    process.on('SIGINT', function () {
        mongoose.connection.close(() => {
            console.log('Mongoose connection disconnected due to application termination');
            app.emit('CLOSE');
        })
    })

    process.on('SIGTERM', function () {
        mongoose.connection.close(() => {
            console.log('Mongoose connection disconnected due to application termination');
            app.emit('CLOSE');
        })
    })
}