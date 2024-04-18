import { Post } from "./models";
import { User } from "./models";
import { connectToDb } from "./utils"

export const getPosts = async () => {
    const data = await fetch("http://localhost:3000/api/blog")
    if(!data.ok){
        throw new Error("error in get posts fetch request")
    }
    return data.json()
}

export const getPost = async (slug) => {
        const post = await fetch(`http://localhost:3000/api/blog/${slug}`)
        if(!post.ok){
            throw new Error("error in get post fetch request")
        }
        return post.json()
}

export const getUsers = async () => {
    try {
        await connectToDb();
        const users = await User.find()
        return users || []
    } catch (error) {
        console.error(error);
    }
}

export const getUser = async (id) => {
    try {
        await connectToDb();
        const user = await User.findById(id)
        return user || null
    } catch (error) {
        console.error(error);
    }
}