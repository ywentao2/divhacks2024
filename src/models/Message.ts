import mongoose, { Schema } from 'mongoose'
import Conversation from './Conversation'
import User from './User'

interface Message {
    senderId: string,
    conversationId: string,
    message: string,
    time: Date
}

const MessageSchema: mongoose.Schema<Message> = new mongoose.Schema(
    {
        senderId: { type: String, required: true },
        conversationId: { type: String, required: true},
        message: { type: String, required: true },
        time: { type: Date, required: true },
    }
)

export default mongoose.model("Message", MessageSchema)