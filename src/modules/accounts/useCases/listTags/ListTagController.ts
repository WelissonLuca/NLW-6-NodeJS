import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTagsUseCase } from './ListTagsUseCase';

class ListTagsController {
  async handle(request: Request, response: Response) {
    const listTagsService = container.resolve(ListTagsUseCase);

    const tags = await listTagsService.execute();

    return response.json(tags);
  }
}

export { ListTagsController };
