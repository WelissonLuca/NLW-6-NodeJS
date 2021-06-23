import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTagUseCase } from './CreateTagsUseCase';

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createTagUseCase = container.resolve(CreateTagUseCase);

    const tag = await createTagUseCase.execute({ name });

    return response.status(201).json(tag);
  }
}

export { CreateTagController };
