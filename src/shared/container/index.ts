import { container } from 'tsyringe';

import { ComplimentRepository } from '@modules/accounts/infra/typeorm/repositories/ComplimentRepository';
import { TagRepository } from '@modules/accounts/infra/typeorm/repositories/TagRepository';
import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';
import { IComplimentRepository } from '@modules/accounts/repositories/IComplimentRepository';
import { ITagRepository } from '@modules/accounts/repositories/ITagRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ITagRepository>('TagRepository', TagRepository);
container.registerSingleton<IComplimentRepository>(
  'ComplimentRepository',
  ComplimentRepository
);
