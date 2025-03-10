import mongoose from "mongoose";

const collection = 'todos';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed : {
        type: Boolean,
        default: false
    }
});

export const taskModel = mongoose.model( collection, taskSchema );
