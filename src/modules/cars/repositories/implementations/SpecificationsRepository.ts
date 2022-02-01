import { Specifications } from '../../entities/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationsDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specifications[];

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationsDTO): void {
    const specifications = new Specifications();

    Object.assign(specifications, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specifications);
  }
  list(): Specifications[] {
    return this.specifications;
  }

  findByName(name: string): Specifications {
    const specifications = this.specifications.find(
      (specifications) => specifications.name === name
    );
    return specifications;
  }
}

export { SpecificationsRepository };
