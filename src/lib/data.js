import { Post } from "./models";
import { User } from "./models";
import { connectToDb } from "./utils"

export const getPosts = async () => {
    try {
        await connectToDb();
        const posts = await Post.find()
        return posts || []
    } catch (error) {
        console.error(error);
    }
}

export const getPost = async (slug) => {
    try {
        await connectToDb();
        const post = await Post.findOne({slug})
        return post || null
    } catch (error) {
        console.error(error);
    }
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