import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials"; //Brukes bare til mock-login
import { PrismaClient } from "../generated/prisma";
import { env } from "./env";



const prisma = new PrismaClient();

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
    const user = await prisma.user.findFirst({
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


const FeideProvider = {
  id: "feide",
  name: "Feide",
  type: "oidc",
  issuer: env.feideIssuer,
  clientId: env.feideClientId,
  clientSecret: env.feideClientSecret,
  authorization: { params: { scope: "openid email profile" } }, //Her kan flere scopes legges til, ut i fra hvilken info vi vil ha tilbake fra Feide
  //idToken: true,
  profile(profile: any) {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
    };
  },
};

const config: NextAuthConfig = {
  providers: [
    MockProvider,
    FeideProvider as any],
  secret: env.nextAuthSecret,

  theme: {
    colorScheme: "auto",
    logo: "/maskot.png",
  },


  //Setter id og role i JWT token og session (hentet fra brukerobjektet ved innlogging)
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        token.role = (user as any).role;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as "STUDENT" | "TEACHER";
      }

      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 8, // 8 timer
  },

} satisfies NextAuthConfig;

export default config;
