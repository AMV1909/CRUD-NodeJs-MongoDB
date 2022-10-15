import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

export default mongoose.model("User", userSchema);