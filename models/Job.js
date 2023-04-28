const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please enter a company name'],
        maxLength: 50
    },

    position: {
        type: String,
        required: [true, 'Please enter the position youre applying for'],
        maxLength: 30
    },

    status: {
        type: String,
        enum : ['interview', 'declined', 'pending'],
        default: 'pending'
    },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: user,
        required: [true, 'Please provide true']
    },

    
}, {timestamps: true})


const Job = mongoose.model('Jobs', JobSchema);
module.exports = Job;