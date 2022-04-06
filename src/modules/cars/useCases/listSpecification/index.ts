import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';

import { ListSpecificationController } from './ListSpecificationController';
import { ListSpecificationUseCases } from './ListSpecificationUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationUsers = new ListSpecificationUseCases(
  specificationsRepository
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationUsers
);

export { listSpecificationController };
