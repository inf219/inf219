import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: String
            role: "STUDENT" | "TEACHER" | "ADMIN";
        } & DefaultSession["user"];
        }
    }

interface User {
    id: string;
    email: string;
    name: string;
    role: "STUDENT" | "TEACHER" | "ADMIN";
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: "STUDENT" | "TEACHER" | "ADMIN";
    }
}


//(JWT = JSON Web Token)  -> Denne klassen legger utvider TypeScript-typene for JWT, og forteller at i tokenet skal det alltid være
//en id og en rolle som enten STUDENT eller TEACHER
