import mongoose from 'mongoose'
import { Schema, models, model } from 'mongoose'    
import Message from './Message'
import User from './User'

interface Conversation {
    messages: [
        typeof Message
    ]
}

const ConversationSchema: mongoose.Schema<Conversation> = new mongoose.Schema(
    {
        messages: { type: [], required: true }
    }
)

const Conversation = models.Conversation || model("Conversation", ConversationSchema)

export default Conversation