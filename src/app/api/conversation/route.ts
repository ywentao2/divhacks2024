import dbConnect from '@/utils/dbConnect'
import Conversation from  '@/models/Conversation'
import { NextResponse } from 'next/server'


export async function GET(request: Request){
    await dbConnect()
    const res = await request.json()
    const { id } = res
    const conversation = Conversation.findById(id)

    return NextResponse.json({ conversation })
}

export async function POST(){
    await dbConnect()

    const conversation = new Conversation({
        messages: []
    })

    await conversation.save()
    console.log(conversation.id)

    return NextResponse.json({ conversation })
}