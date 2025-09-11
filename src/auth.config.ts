import { env } from "./env";
import type { NextAuthConfig } from "next-auth";

console.log("Loaded ENV: ", env);

const FeideProvider = {
  id: "feide",
  name: "Feide",
  type: "oidc",
  issuer: env.feideIssuer,
  clientId: env.feideClientId,
  clientSecret: env.feideClientSecret,
  authorization: { params: { scope: "openid email profile" } },
  idToken: true,
  profile(profile: any) {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
    };
  },
};

const config: NextAuthConfig = {
  providers: [FeideProvider as any],
  secret: env.nextAuthSecret,
} satisfies NextAuthConfig;

export default config;
