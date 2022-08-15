import { getModelForClass, prop } from "@typegoose/typegoose";
import { Field as GqlField, ObjectType as GqlType } from "type-graphql";

import { modelOptions as options } from "../../../db";

@GqlType({ description: "User Type" })
export class User {
  @GqlField((_type) => String)
  @prop({ type: String, unique: true })
  public email: string;

  @GqlField((_type) => String)
  @prop({ type: String })
  public firstName: string;

  @GqlField((_type) => String)
  @prop({ type: String })
  public lastName: string;

  @GqlField((_type) => String)
  @prop({ type: String })
  private password: string;
}

export const UserModel = getModelForClass(User, options);
