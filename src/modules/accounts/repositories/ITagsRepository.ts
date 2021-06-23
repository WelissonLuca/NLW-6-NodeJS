import { ICreateTagDTO } from '../dtos/ICreateTagDTO';
import { Tag } from '../infra/typeorm/entities/Tag';

interface ITagsRepository {
  create(data: ICreateTagDTO): Promise<Tag>;
  list(): Promise<Tag[]>;
  findByName(name: string): Promise<Tag>;
}

export { ITagsRepository };
