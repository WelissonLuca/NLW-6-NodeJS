import { ICreateTagDTO } from '../dtos/ICreateTagDTO';
import { Tag } from '../infra/typeorm/entities/Tag';

interface ITagRepository {
  create(data: ICreateTagDTO): Promise<Tag>;
  list(): Promise<Tag[]>;
  findByName(name: string): Promise<Tag>;
}

export { ITagRepository };
