import { getRepository, Repository } from 'typeorm';

import { Specifications } from '../../entities/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationsDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specifications>;

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.repository = getRepository(Specifications);
  }

  async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });
    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specifications> {
    const specifications = this.repository.findOne({ name });
    return specifications;
  }
}

export { SpecificationsRepository };
