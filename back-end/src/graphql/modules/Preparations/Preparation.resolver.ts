import { Context } from "apollo-server-core";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

// Inputs
import { CreatePreparationInput } from "../../inputs";

// Preparation Model
import { Preparation } from "./Preparation.model";

// Services
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
  async createPreparation(
    @Arg("CreatePreparationInput", (_type) => CreatePreparationInput)
    input: CreatePreparationInput,
    @Ctx() _ctx: Context
  ) {
    return await this.preparationService.createPreparation(input);
  }
}
