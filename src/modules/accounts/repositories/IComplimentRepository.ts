import { ICreateComplimentDTO } from '../dtos/ICreateComplimentDTO';
import { Compliment } from '../infra/typeorm/entities/Compliment';

interface IComplimentRepository {
  create(data: ICreateComplimentDTO): Promise<Compliment>;
  list(data): Promise<Compliment[]>;
  findByUserReceiver(user_receiver: string): Promise<Compliment>;
}

export { IComplimentRepository };
