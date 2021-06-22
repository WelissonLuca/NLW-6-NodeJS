import { ICreateUseDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

interface IUserRepository {
  create(data: ICreateUseDTO): Promise<User>;
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
}

export { IUserRepository };
