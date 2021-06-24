import { inject, injectable } from 'tsyringe';

import { ITagRepository } from '@modules/accounts/repositories/ITagRepository';
import { AppError } from '@shared/errors/AppError';

import { Tag } from '../../infra/typeorm/entities/Tag';

interface ITagRequest {
  name: string;
}

@injectable()
class CreateTagUseCase {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagRepository
  ) {}
  async execute({ name }: ITagRequest): Promise<Tag> {
    if (!name) throw new AppError('Name incorrect!');

    const tagAlreadyExists = await this.tagRepository.findByName(name);

    if (tagAlreadyExists) throw new AppError('Tag already exists!');

    const result = this.tagRepository.create({ name });

    return result;
  }
}

export { CreateTagUseCase };
