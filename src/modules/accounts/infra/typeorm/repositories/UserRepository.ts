import { getRepository, Repository } from 'typeorm';

import { ICreateUseDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';

import { User } from '../entities/User';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, admin }: ICreateUseDTO): Promise<User> {
    const user = await this.repository.create({
      name,
      email,
      admin,
    });

    const result = await this.repository.save(user);

    return result;
  }

  async list(): Promise<User[]> {
    const result = await this.repository.find();

    return result;
  }

  async findByEmail(email: string): Promise<User> {
    const result = await this.repository.findOne(email);

    return result;
  }
}

export { UserRepository };
