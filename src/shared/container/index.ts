import { container } from 'tsyringe';

import { TagRepository } from '@modules/accounts/infra/typeorm/repositories/TagRepository';
import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';
import { ITagRepository } from '@modules/accounts/repositories/ITagRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ITagRepository>('TagRepository', TagRepository);
