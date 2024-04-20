import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { User } from "./models";
import { connectToDb } from "./utils";

export const {
    handlers: { GET, POST },
    auth, 
    signIn, 
    signOut, 
} = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks:{
        async signIn({user, account, profile}){
            // console.log(user, account, profile);
            if(account.provider === "github"){
                try {
                    await connectToDb()
                    const {name, email, image} = user
                    const userExist = await User.findOne({email})
                    console.log("userExist", userExist);
                    if(!userExist){
                        const newUser = new User({name, email, image})
                        await newUser.save()
                    }
                } catch (error) {
                    console.log(error);
                    return false
                }
            }
            return true
        }
    }
})