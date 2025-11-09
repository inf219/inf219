import "server-only"
export const runtime = "nodejs";

import NextAuth from "next-auth";
import config from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import Credentials from "next-auth/providers/credentials";


//MOCK PROVIDER kan fjernes når vi har tilgang til feide!
//Credentials: Hvilke felt som skal fylles ut i login-skjemaet
const MockProvider = Credentials({
  name: "Mock-login",
  credentials: {
    username: { label: "Brukernavn", type: "text", placeholder: "Skriv inn brukernavn" },
    password: { label: "Passord", type: "password", placeholder: "Skriv inn passord" },
  },

  //Input credentials hentes når en bruker prøver å logge inn
  async authorize(credentials) {
    const username = credentials.username;
    const password = credentials.password;

    //Dersom brukernavn eller passord mangler, avbrytes innlogging
    if (!username || !password) return null;

    //Sjekk i databasen om brukeren finnes (Sjekkes nå på navn direkte!)
     const user = await prisma.user.findUnique({
       where: { name: String(username) },
     });

    // //Hvis brukeren ikke finnes, returner null (innlogging feiler)
    if (!user) return null;


    return {
      id: String(user.id),
      name: user.name,
      role: user.role,
      email: user.email || "",
    };
  },
});

 
export const { auth, handlers, signIn, signOut } = NextAuth({
    ...config,
    adapter: PrismaAdapter(prisma),
    providers: [
        ...(config.providers ?? []),
        MockProvider, //Kan fjernes senere
    ]
})