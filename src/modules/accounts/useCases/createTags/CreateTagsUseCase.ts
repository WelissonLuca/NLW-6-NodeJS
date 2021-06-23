import { inject, injectable } from 'tsyringe';

import { ITagRepository } from '@modules/accounts/repositories/ITagRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

import { Tag } from '../../infra/typeorm/entities/Tag';

interface ITagRequest {
  name: string;
}

@injectable()
class CreateTagUseCase {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute({ name }: ITagRequest, email?: string): Promise<Tag> {
    if (!name) throw new AppError('Name incorrect!');

    const tagAlreadyExists = await this.tagRepository.findByName(name);

    if (tagAlreadyExists) throw new AppError('Tag already exists!');

    const isAdmin = await this.userRepository.findByEmail(email);

    if (isAdmin.admin !== true)
      throw new AppError(
        'Must have administrator credential to register a tag',
        401
      );

    const result = this.tagRepository.create({ name });

    return result;
  }
}

export { CreateTagUseCase };
