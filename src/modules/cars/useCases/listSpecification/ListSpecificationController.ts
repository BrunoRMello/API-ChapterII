import { Request, Response } from 'express';

import { ListSpecificationUseCases } from './ListSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCases) {}

  handle(request: Request, response: Response): Response {
    const all = this.listSpecificationUseCase.execute();

    return response.json(all);
  }
}

export { ListSpecificationController };
