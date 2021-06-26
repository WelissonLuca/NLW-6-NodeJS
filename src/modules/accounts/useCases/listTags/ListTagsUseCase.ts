import { inject, injectable } from 'tsyringe';

import { ITagRepository } from '@modules/accounts/repositories/ITagRepository';

import { Tag } from '../../infra/typeorm/entities/Tag';

@injectable()
class ListTagsUseCase {
  constructor(
    @inject('TagRepository')
    private tagRepository: ITagRepository
  ) {}
  async execute(): Promise<Tag[]> {
    const tags = await this.tagRepository.list();

    return tags;
  }
}

export { ListTagsUseCase };
