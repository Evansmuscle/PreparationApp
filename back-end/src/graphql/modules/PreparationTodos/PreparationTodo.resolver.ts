import { Mutation, Query, Resolver } from "type-graphql";

// Models
import { PreparationTodo } from "./PreparationTodo.model";

// Services
import { PreparationTodoService } from "./PreparationTodo.service";

@Resolver((_of) => PreparationTodo)
export class PreparationTodoResolver {
  private readonly preparationTodoService: PreparationTodoService;

  constructor() {
    this.preparationTodoService = new PreparationTodoService();
  }

  @Query((_returns) => [PreparationTodo])
  async getAllTodos() {
    this.preparationTodoService.getAllTodos();
  }

  @Mutation((_returns) => PreparationTodo)
  async createTodo() {
    this.preparationTodoService.createTodo();
  }
}
