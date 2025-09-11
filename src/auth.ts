import NextAuth from "next-auth";
import config from "./auth.config";

 
export const { auth, handlers, signIn, signOut } = NextAuth(config)