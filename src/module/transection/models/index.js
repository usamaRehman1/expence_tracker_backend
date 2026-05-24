import mongoose from 'mongoose';

const transectionShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    }
})

export const transectionModel = mongoose.model("data", transectionShema)