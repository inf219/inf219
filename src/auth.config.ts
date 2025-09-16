import { env } from "./env";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials"; //Brukes bare til mock-login


//MOCK PROVIDER kan fjernes når vi har tilgang til feide!
const MockProvider = Credentials({
  name: "Mock-login",
  credentials: {
    username: { label: "Brukernavn", type: "text" },
  },
  async authorize(credentials) {
    const username = credentials?.username;

    if (!username) return null;

    return {
      id: "mock-user",
      name: String(username),
      email: `${credentials.username}@example.com`,
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
  authorization: { params: { scope: "openid email profile" } },
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
  providers: [MockProvider, FeideProvider as any],
  secret: env.nextAuthSecret,
} satisfies NextAuthConfig;

export default config;
