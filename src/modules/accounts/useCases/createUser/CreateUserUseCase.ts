import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

import { User } from '../../infra/typeorm/entities/User';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute({ name, email, admin }: IUserRequest): Promise<User> {
    if (!email) throw new AppError('Email incorrect!');
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) throw new AppError('User already exists!');

    const result = this.userRepository.create({ name, email, admin });

    return result;
  }
}

export { CreateUserUseCase };
