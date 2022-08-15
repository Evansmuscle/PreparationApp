import * as argon from "argon2";

// User Model
import { UserModel } from "./User.model";

// Inputs
import { CreateUserInput } from "../../inputs";

// Exceptions
import { UserAlreadyExistsException } from "../../../exceptions";

export class UserService {
  private readonly userModel = UserModel;

  public me() {
    // Get me logic
  }

  public async createUser({
    email,
    firstName,
    lastName,
    password,
  }: CreateUserInput) {
    try {
      const hashedPassword = await argon.hash(password);

      const user = await this.userModel.create({
        email,
        firstName,
        lastName,
        password: hashedPassword,
      });

      return user;
    } catch (err) {
      if ((err as Error).message.includes("duplicate key error")) {
        throw new UserAlreadyExistsException();
      }

      throw new Error((err as Error).message);
    }
  }
}
