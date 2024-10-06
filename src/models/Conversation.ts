import mongoose from 'mongoose'
import { Schema, models, model } from 'mongoose'    
import Message from './Message'
import User from './User'

interface Conversation {
    users: [
        String
    ]
    messages: [
        typeof Message
    ]
}

const ConversationSchema: mongoose.Schema<Conversation> = new mongoose.Schema(
    {
        users: { type: [String], required: true },
        messages: { type: [Message], required: true }
    }
)

const Conversation = models.Conversation || model("Conversation", ConversationSchema)

export default Conversation