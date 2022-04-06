import { Specifications } from '../infra/typeorm/entities/Specification';

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationsDTO): Promise<void>;
  findByName(name: string): Promise<Specifications>;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
