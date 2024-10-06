import { NextResponse } from "next/server"
import dbConnect from '@/utils/dbConnect'
import User from "@/models/User"

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
    const res = await request.json()
    const { username, email, password } = res

    const user = new User({
        username,
        email,
        password
    })

    await user.save()

    return NextResponse.json({ user })
}
