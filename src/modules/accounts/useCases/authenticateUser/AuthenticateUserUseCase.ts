import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
@injectable()
class AuthenticateUSerUseCase {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new AppError('Email or password incorrect');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError('Email or password incorrect');

    const token = sign({}, 'f7166771e7be1c63a6151e0fee45ab0b', {
      subject: user.id,
      expiresIn: '1d',
    });
    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
    return tokenReturn;
  }
}

export { AuthenticateUSerUseCase };
