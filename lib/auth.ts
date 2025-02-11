import NextAuth from "next-auth";
import {authConfig} from "@/lib/auth.config";
import Credentials from "@auth/core/providers/credentials";
import bcryptjs from "bcryptjs";
import {signInSchema} from "@/lib/zod";
import {prisma} from "@/lib/prisma";


async function getUser(email: string, password: string){
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(!user) return null;

        if(! await bcryptjs.compare(password, user.password!)) return null;

        return user;
    } catch (error) {
        console.error(error);
        throw new Error("failed to get user");
    }
}

export const { auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
              email: {},
              password:{}
            },
            authorize: async(credentials) => {
                let user = null

                const {email, password} = await signInSchema.parseAsync(credentials);

                user = getUser(email, password);

                if(!user){
                    console.error("Failed to get user");
                    throw new Error("Invalid credentials");
                }

                console.log(user)

                return user;
            }
        })
    ]
})