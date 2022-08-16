import { AuthChecker } from "type-graphql";

// Context Type and Model
import { User, UserModel } from "../modules/User/User.model";

export const customAuthChecker: AuthChecker<User> = async (
  { root, args, context, info },
  roles
) => {
  const user = await UserModel.findById(context._id);

  return true;
};
