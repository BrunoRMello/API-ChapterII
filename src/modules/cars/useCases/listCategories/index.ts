import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCases } from './ListCategoriesUseCase';

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCases(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };