// Models
import { PreparationModel, UserModel } from "../models";

// Inputs
import { CreatePreparationInput } from "../../inputs";

// Exceptions
import { UserNotFoundException } from "../../../exceptions";

export class PreparationService {
  private readonly preparationModel = PreparationModel;
  private readonly userModel = UserModel;

  public async getAllPreparations() {
    // Get all preparations logic
  }

  public async createPreparation({
    title,
    description,
    finishDate,
    ownerId,
  }: CreatePreparationInput) {
    try {
      const owner = await this.userModel.findById(ownerId);

      if (!owner) {
        throw new UserNotFoundException();
      }

      const preparation = await this.preparationModel.create({
        title,
        description,
        finishDate,
        owner,
      });

      owner.preparations.push(preparation);
      await owner.save();

      return preparation;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
