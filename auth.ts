import { FirestoreAdapter } from "@auth/firebase-adapter"
import { NextAuthOptions } from "next-auth"
import  GoogleProvider  from "next-auth/providers/google"
import { adminDb } from "./firebase-admin"

export const authOptions: NextAuthOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {

        jwt: async ({token, user}) => {
            if (user) {
               
                token.sub = user.id
            }
            return token
        }
    },
    session:{
        strategy: "jwt",
    },
    adapter: FirestoreAdapter(adminDb)
    // providers: [
    //     Providers.GitHub({
    //     clientId: process.env.GITHUB_ID,
    //     clientSecret: process.env.GITHUB_SECRET
    //     })
    // ],
    // database: process.env.DATABASE_URL,
    // session: { 
    //     jwt: true
    // },
    // jwt: {
    //     secret: process.env.JWT_SECRET
    // },
    // callbacks: {
    //     async signIn(user, account, profile) {
    //     if (account.provider === 'github') {
    //         const res = await fetch('https://api.github.com/user/emails', {
    //         headers: {
    //             Authorization: `token ${account.accessToken}`
    //         }
    //         })
    //         const emails = await res.json()
    //         const primaryEmail = emails.find(email => email.primary)?.email
    //         if (!primaryEmail) {
    //         return false
    //         }
    //         user.email = primaryEmail
    //     }
    //     return true
    //     }
    // }
} satisfies NextAuthOptions