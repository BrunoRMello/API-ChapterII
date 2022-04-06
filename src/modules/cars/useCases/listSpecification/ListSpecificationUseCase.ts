import { Specifications } from '../../infra/typeorm/entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationUseCases {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute(): Specifications[] {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationUseCases };
