import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserUseCase } from './ListUserUseCase';

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersService = container.resolve(ListUserUseCase);

    const users = await listUsersService.execute();

    return response.json(users);
  }
}

export { ListUsersController };
