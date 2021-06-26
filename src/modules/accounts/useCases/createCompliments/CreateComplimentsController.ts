import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateComplimentUseCase } from './CreateComplimentsUseCase';

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_sender, user_receiver, message } = request.body;
    const { user_id } = request;
    const createComplimentUseCase = container.resolve(CreateComplimentUseCase);

    const compliment = await createComplimentUseCase.execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };
