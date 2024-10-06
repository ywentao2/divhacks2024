import { NextResponse } from "next/server"
import dbConnect from '@/utils/dbConnect'
import User from "@/models/User"
import { getSession } from "@auth0/nextjs-auth0"

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
    const session = await getSession();

    if (session && session.user) {
        const id = session.user?.nickname
        console.log(id)

        const newUser = new User({
            username: id
        })

        await newUser.save()

        return NextResponse.json({ newUser })
    }
    else{
        return NextResponse.json({ message: "error" })
    }
}
