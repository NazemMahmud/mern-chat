import mongoose from "mongoose";

export const MessageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content: {
        type: String,
        required: [true, "can't be empty"],
    },
    type: {
        type: String,
    }
});

MessageSchema.set('toJSON', { virtuals: true });

export const MessageModel = mongoose.model("Message", MessageSchema);
