import { Post } from "@/lib/models";

export const GET = async (req) => {
    try {
        const post = await Post.find()
        return post
    } catch (error) {
        console.log("error in get post");
        throw new error(error)
    }
}