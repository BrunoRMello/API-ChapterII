import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
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
