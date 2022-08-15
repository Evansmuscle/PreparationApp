import { UserResolver } from "./modules/User/User.resolver";
import { PreparationResolver } from "./modules/Preparations/Preparation.resolver";
import { PreparationTodoResolver } from "./modules/PreparationTodos/PreparationTodo.resolver";

export const resolvers = [
  UserResolver,
  PreparationResolver,
  PreparationTodoResolver,
] as const;
