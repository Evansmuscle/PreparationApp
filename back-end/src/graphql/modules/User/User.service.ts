import * as argon from "argon2";

// User Model
import { UserModel } from "../models";

// Inputs
import { CreateUserInput } from "../../inputs";

// Exceptions
import {
  UserAlreadyExistsException,
  UserNotFoundException,
} from "../../../exceptions";

export class UserService {
  private readonly userModel = UserModel;

  public async me(id: string) {
    try {
      const user = await this.userModel.findById(id);

      if (!user) {
        throw new UserNotFoundException();
      }

      return user;
    } catch (err) {
      throw new Error((err as Error).message);
    }
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
