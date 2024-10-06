import { NextResponse } from "next/server"
import dbConnect from '@/utils/dbConnect'
import User from "@/models/User"
import { useUser } from '@auth0/nextjs-auth0/client'

export async function GET() {
    try {
        await dbConnect()
        const users = await User.find() 
        return NextResponse.json({ data: users });
    } catch(error) {
        return NextResponse.json({ message: "error connecting to mongodb" });
    }       
}

export async function POST(request: Request) {
    await dbConnect()
    const { user } = useUser();
    const id = user?.nickname
    const newUser = new User({
        username: id
    })

    await newUser.save()

    return NextResponse.json({ user })
}
