import { UserRepository } from "../repositories/userRepository";


const userRepo = new UserRepository();

export class UserService {
  async getUserByName(name: string) {
    return await userRepo.findByName(name);
  }

  async getUserByEmail(email: string) {
    return await userRepo.findByEmail(email);
  }
}