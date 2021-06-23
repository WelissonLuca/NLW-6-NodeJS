import { getRepository, Repository } from 'typeorm';

import { ICreateTagDTO } from '@modules/accounts/dtos/ICreateTagDTO';
import { ITagRepository } from '@modules/accounts/repositories/ITagRepository';

import { Tag } from '../entities/Tag';

class TagRepository implements ITagRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  async create({ name }: ICreateTagDTO): Promise<Tag> {
    const tag = await this.repository.create({
      name,
    });

    const result = await this.repository.save(tag);

    return result;
  }

  async list(): Promise<Tag[]> {
    const result = await this.repository.find();

    return result;
  }

  async findByName(name: string): Promise<Tag> {
    const result = await this.repository.findOne({ name });

    return result;
  }
}

export { TagRepository };
