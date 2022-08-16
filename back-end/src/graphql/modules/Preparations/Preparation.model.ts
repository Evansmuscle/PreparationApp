import { Field as GqlField, ObjectType as GqlObjectType } from "type-graphql";
import { prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

// Enums
import { Status } from "../../enums";

// Models
import { PreparationTodo } from "../PreparationTodos/PreparationTodo.model";
import { User } from "../User/User.model";

// Scalars
import { ObjectIdScalar } from "../../scalars";

@GqlObjectType()
export class Preparation {
  @GqlField((_type) => ObjectIdScalar)
  public readonly _id: ObjectId;

  @GqlField((_type) => String)
  @prop({ type: String, required: true })
  public title: string;

  @GqlField((_type) => String)
  @prop({ type: String, required: true })
  public description: string;

  @GqlField((_type) => Status)
  @prop({ enum: Status, default: Status.NOT_STARTED })
  public status: Status;

  @GqlField((_type) => [PreparationTodo])
  @prop({ ref: () => PreparationTodo, default: [] })
  public todos: Ref<PreparationTodo>[];

  @GqlField((_type) => User)
  @prop({ ref: () => User, required: true })
  public owner: Ref<User>;

  @GqlField((_type) => Date)
  @prop({ type: Date, required: true })
  public finishDate: Date;
}
