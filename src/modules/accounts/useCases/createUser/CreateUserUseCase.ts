import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

import { User } from '../../infra/typeorm/entities/User';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute({
    name,
    email,
    password,
    admin = false,
  }: IUserRequest): Promise<User> {
    if (!email) throw new AppError('Email incorrect!');

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) throw new AppError('User already exists!');

    const passwordHash = await hash(password, 8);

    const result = this.userRepository.create({
      name,
      email,
      password: passwordHash,
      admin,
    });

    return result;
  }
}

export { CreateUserUseCase };
