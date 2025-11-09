import { env } from "./env";
import type { NextAuthConfig } from "next-auth";


//Skal tas i bruk når Feide er oppe og går!
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
    FeideProvider as any ],
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
