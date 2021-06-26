import request from 'supertest';
import { Connection } from 'typeorm';

import { ICreateTagDTO } from '@modules/accounts/dtos/ICreateTagDTO';
import { app } from '@shared/infra/http/app';
import { connection } from '@shared/infra/typeorm/index';

let db: Connection;
describe('Create Tag - Test Controller', () => {
  beforeAll(async () => {
    db = await connection();
    await db.runMigrations();
  });

  afterAll(async () => {
    await db.query('drop table users; drop table tags; drop table migrations;');
    await db.close();
  });

  const tagData: ICreateTagDTO = {
    name: 'example tag 1',
  };

  it('should be able to create a new tag', async () => {
    const response = await request(app).post('/accounts/tags').send(tagData);
    expect(response.status).toBe(201);
    expect(tagData.name).toBe(response.body.name);
  });

  it('should  not be able create a new tag with an already used name', async () => {
    const response = await request(app).post('/accounts/tags').send(tagData);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Tag already exists!');
  });
  it('should not be able create a new tag with empty fields', async () => {
    const response = await request(app).post('/accounts/tags').send();
    expect(response.status).toBe(400 || 500);
  });
});
