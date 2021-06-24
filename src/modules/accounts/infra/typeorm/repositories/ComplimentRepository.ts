import { getRepository, Repository } from 'typeorm';

import { ICreateComplimentDTO } from '@modules/accounts/dtos/ICreateComplimentDTO';
import { IComplimentRepository } from '@modules/accounts/repositories/IComplimentRepository';

import { Compliment } from '../entities/Compliment';

class ComplimentRepository implements IComplimentRepository {
  private repository: Repository<Compliment>;

  constructor() {
    this.repository = getRepository(Compliment);
  }

  async create({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: ICreateComplimentDTO): Promise<Compliment> {
    const compliment = await this.repository.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    const result = await this.repository.save(compliment);

    return result;
  }

  async list(): Promise<Compliment[]> {
    const result = await this.repository.find();

    return result;
  }

  async findByUserReceiver(user_receiver: string): Promise<Compliment> {
    const result = await this.repository.findOne({ user_receiver });

    return result;
  }
}

export { ComplimentRepository };
