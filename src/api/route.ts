import { NextResponse } from "next/server"
import dbConnect from '@/utils/dbConnect'

export async function GET(request: Request) {
    try {
        await dbConnect();
        return NextResponse.json({ message: "connected to mongodb" });
    } catch(error) {
        return NextResponse.json({ message: "error connecting to mongodb" });
    }
}