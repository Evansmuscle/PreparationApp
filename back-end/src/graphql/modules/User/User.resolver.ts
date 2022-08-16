import { Context } from "apollo-server-core";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserInput } from "../../inputs";

// User
import { User } from "./User.model";
import { UserService } from "./User.service";

@Resolver((_of) => User)
export class UserResolver {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  @Query((_returns) => User)
  async me(@Arg("id", (_type) => String) id: string, @Ctx() _ctx: Context) {
    return this.userService.me(id);
  }

  @Mutation((_returns) => User)
  async createUser(
    @Arg("CreateUserInput", (_type) => CreateUserInput) input: CreateUserInput,
    @Ctx() _ctx: Context
  ) {
    return this.userService.createUser(input);
  }
}
