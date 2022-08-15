import { Mutation, Query, Resolver } from "type-graphql";

// Preparation Model
import { Preparation } from "./Preparation.model";
import { PreparationService } from "./Preparation.service";

@Resolver((_of) => Preparation)
export class PreparationResolver {
  private readonly preparationService: PreparationService;

  constructor() {
    this.preparationService = new PreparationService();
  }

  @Query((_returns) => [Preparation])
  async test() {
    return this.preparationService.getAllPreparations();
  }

  @Mutation((_returns) => Preparation)
  async testMutation() {
    return this.preparationService.createPreparation();
  }
}
