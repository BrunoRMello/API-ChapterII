import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { ListSpecificationController } from '../modules/cars/useCases/listSpecification/ListSpecificationController';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  return ListSpecificationController.handle(request, response); //
});

export { specificationsRoutes };
