import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';

import { User } from '../../infra/typeorm/entities/User';

@injectable()
class ListUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute(): Promise<User[]> {
    const users = await this.userRepository.list();

    return users;
  }
}

export { ListUserUseCase };
