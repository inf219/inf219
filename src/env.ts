
function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Manglende miljøvariabel: ${name}`);
  }
  return value;
}

export const env = {
  feideClientId: getEnv("FEIDE_CLIENT_ID"),
  feideClientSecret: getEnv("FEIDE_CLIENT_SECRET"),
  feideIssuer: getEnv("FEIDE_ISSUER"),
  nextAuthSecret: getEnv("NEXTAUTH_SECRET"),
  nextAuthUrl: getEnv("NEXTAUTH_URL"),
};
