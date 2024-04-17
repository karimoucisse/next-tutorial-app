import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username: {
        type: string, 
        required: true, 
        unique: true, 
        min: 3, max: 22
    },
    email: {
        type: email, 
        required: true, 
        unique: true
    },
    password: {
        type: password,
        required: true, 
        min: 8
    },
    img: {type: string},
    isAdmin: {
        type: boolean, 
        default: false
    }
}, {timestamps: true})

const postSchema = mongoose.Schema({
    title: {
        type: string,
        required: true
    },
    desc: {
        type: string,
        required: true,
    },
    img: {type: string},
    userId: {
        type: string,
        required: true,
        unique: true
    },
    sluf: {
        type: string,
        required: true,
        unique: true
    }
}, {timestamps: true})

export const User = mongoose.User.models("User", userSchema)
export const Post = mongoose.Post.models("Post", postSchema)