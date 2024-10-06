import mongoose from 'mongoose'

const dbConnect = async () => {
    try { 
        await mongoose.connect(process.env.MONGO_URI!)
    } catch(error) {
        console.log("not connected")
    }
}

export default dbConnect;