import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    hobbies: {
        type : Array,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    resumePath: {
        type: String
    },
},{
    timestamps: true
});

export default mongoose.model('Users',userSchema)