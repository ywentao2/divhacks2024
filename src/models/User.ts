import mongoose from "mongoose"
import { model, models } from "mongoose"

interface User {
    username: string
}

const UserSchema: mongoose.Schema<User> = new mongoose.Schema(
    {
        username: { type: String, required: true },
    }
)

const User = models.User || model("User", UserSchema)

export default User