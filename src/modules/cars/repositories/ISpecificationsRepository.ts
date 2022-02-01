import { Specifications } from '../entities/Specification';

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationsDTO): void;
  list(): Specifications[];
  findByName(name: string): Specifications;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
