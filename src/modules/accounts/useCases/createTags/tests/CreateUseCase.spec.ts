import { Connection } from 'typeorm';

import { ICreateTagDTO } from '@modules/accounts/dtos/ICreateTagDTO';
import { TagRepository } from '@modules/accounts/infra/typeorm/repositories/TagRepository';
import { AppError } from '@shared/errors/AppError';
import { connection } from '@shared/infra/typeorm/index';

import { CreateTagUseCase } from '../CreateTagUseCase';

let db: Connection;
let tagRepository: TagRepository;
let createTagUseCase: CreateTagUseCase;
describe('Create Tag', () => {
  beforeAll(async () => {
    db = await connection();
    await db.runMigrations();
    tagRepository = new TagRepository();
    createTagUseCase = new CreateTagUseCase(tagRepository);
  });
  afterAll(async () => {
    await db.query('drop table users; drop table tags; drop table migrations;');
    await db.close();
  });

  it('should be able to create a new tag', async () => {
    const userDTO: ICreateTagDTO = {
      name: 'example tag 1',
    };
    const user = await createTagUseCase.execute(userDTO);
    expect(user).toHaveProperty('name');
  });

  it('should  not be able create a new tag with an already used name', async () => {
    await expect(async () => {
      await createTagUseCase.execute({
        name: 'example',
      });
      await createTagUseCase.execute({
        name: 'example',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
