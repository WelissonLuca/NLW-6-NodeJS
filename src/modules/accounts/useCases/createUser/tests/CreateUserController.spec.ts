import request from 'supertest';
import { Connection } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { AppError } from '@shared/errors/AppError';
import { app } from '@shared/infra/htpp/app';
import { connection } from '@shared/infra/typeorm/index';

let db: Connection;
describe('Create User Controller', () => {
  beforeAll(async () => {
    db = await connection();
    await db.runMigrations();
  });

  afterAll(async () => {
    await db.query('drop table users; drop table tags; drop table migrations;');
    await db.close();
  });

  const userData: ICreateUserDTO = {
    name: 'example user 1',
    email: 'example1@example.com',
    admin: true,
  };

  it('should be able to create a new user', async () => {
    const response = await request(app).post('/accounts/users').send(userData);
    expect(response.status).toBe(201);
    expect(userData.name).toBe(response.body.name);
    expect(userData.email).toBe(response.body.email);
    expect(userData.admin).toBe(response.body.admin);
  });

  it('should  not be able create a new user with an already used email', async () => {
    const response = await request(app).post('/accounts/users').send(userData);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('User already exists!');
  });
  it('should not be able create a new user with empty fields', async () => {
    const response = await request(app).post('/accounts/users').send();
    expect(response.status).toBe(400 || 500);
  });
});
