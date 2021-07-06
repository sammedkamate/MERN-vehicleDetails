const mongoose = require('mongoose');
const schema = mongoose.Schema;

const vehicleSchema = new schema({
    model:{
        type: String,
        required: true
    },
    insuranceNumber:{
        type: Number,
        required: true,
        unique: true
    },
    chassisNumber:{
        type: Number,
        required: true,
        unique: true
    },
    ownerName:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true,
        unique: true
    },

}, { timestamps:true });

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;
