import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUSerUseCase } from './AuthenticateUserUseCase';

class AuthenticateUSerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUSerUseCase = container.resolve(AuthenticateUSerUseCase);

    const token = await authenticateUSerUseCase.execute({ password, email });

    return response.json(token);
  }
}

export { AuthenticateUSerController };
