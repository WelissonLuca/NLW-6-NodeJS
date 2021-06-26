import { inject, injectable } from 'tsyringe';

import { IComplimentRepository } from '@modules/accounts/repositories/IComplimentRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}
@injectable()
class CreateComplimentUseCase {
  constructor(
    @inject('ComplimentRepository')
    private complimentRepository: IComplimentRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest) {
    if (user_sender === user_receiver) {
      throw new AppError('Incorrect User Receiver');
    }

    const userReceiverExists = await this.userRepository.findById(
      user_receiver
    );

    if (!userReceiverExists) {
      throw new AppError('User Receiver does not exists!');
    }

    const result = this.complimentRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    return result;
  }
}

export { CreateComplimentUseCase };
