import { NextResponse } from "next/server"
import dbConnect from '@/utils/dbConnect'
import Conversation from '@/models/Message'
import Message from "@/models/Message"
import User from "@/models/User"

export async function GET() {
    try {
        await dbConnect()
        const messages = await Message.find()
        return NextResponse.json({ data: messages });
    } catch(error) {
        return NextResponse.json({ message: "error connecting to mongodb" });
    }
}

export async function POST(request: Request) {
    const data = await request.json()
    const conversation = await 

    /*const data = await request.json()
    const { senderId, message, conversationId } = data
    const conversation = await Conversation.findById(conversationId)
    
    if(!conversation){
        return NextResponse.json({ message: "Conversation not found" })
    }

    const newMessage = new Message({
        senderId: senderId, //User.findOne({ username: senderId }),
        message: message,
        conversationId: conversationId
    })

    conversation.messages.push(newMessage)
    await newMessage.save()
    await conversation.save()

    return NextResponse.json({ newMessage })*/
}
