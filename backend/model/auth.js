import mongoose from "mongoose";

const AuthSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)
export const Auth = mongoose.model('Auth', AuthSchema);