import mongoose from "mongoose";

export const ConversationSchema = new mongoose.Schema({
        participants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }],
        messages: [{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Message',
        }],
    },
    {timestamps: true}
);


export const ConversationModel = mongoose.model("Conversation", ConversationSchema);
