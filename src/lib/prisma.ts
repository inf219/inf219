import 'server-only';
import { PrismaClient } from '@prisma/client';


//oppretter en singleton PrismaClient, for å unngå flere tilkoblinger i dev mode.
const globalForPrisma = globalThis as unknown as {prisma?: PrismaClient};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
