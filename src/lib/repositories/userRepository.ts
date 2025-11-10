// lib/repositories/userRepository.ts
import { prisma } from "@/lib/prisma";

export class UserRepository {
  async findByName(name: string) {
    return await prisma.user.findUnique({
      where: { name },
    });
  }

  async findByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }
}