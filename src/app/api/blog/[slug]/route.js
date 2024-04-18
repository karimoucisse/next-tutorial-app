import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

const { Post } = require("@/lib/models")

export const GET = async (req, {params}) => {
    const {slug} = params
    try {
        connectToDb();
        const post = await Post.findOne({slug})
        return NextResponse.json(post)
    } catch (error) {
        console.log(error);
        throw new error("error in get post APi")
    }
}