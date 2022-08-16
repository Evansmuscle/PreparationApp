import { prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field as GqlField, ObjectType as GqlType } from "type-graphql";

// Models
import { Preparation } from "../Preparations/Preparation.model";

// Scalars
import { ObjectIdScalar } from "../../scalars";

@GqlType({ description: "User Type" })
export class User {
  @GqlField((_type) => ObjectIdScalar)
  public readonly _id: ObjectId;

  @GqlField((_type) => String)
  @prop({ type: String, unique: true, required: true })
  public email: string;

  @GqlField((_type) => String)
  @prop({ type: String, required: true })
  public firstName: string;

  @GqlField((_type) => String)
  @prop({ type: String, required: true })
  public lastName: string;

  @GqlField((_type) => String)
  @prop({ type: String, required: true })
  public password: string;

  @GqlField((_type) => [Preparation])
  @prop({ ref: () => Preparation })
  public preparations: Ref<Preparation>[];

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
