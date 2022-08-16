import { Field as GqlField, ObjectType as GqlObjectType } from "type-graphql";
import { prop, Ref } from "@typegoose/typegoose";

// Enums
import { Status } from "../../enums";

// Models
import { Preparation } from "../Preparations/Preparation.model";
import { ObjectId } from "mongodb";

// Scalars
import { ObjectIdScalar } from "../../scalars";

@GqlObjectType()
export class PreparationTodo {
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

  @GqlField((_type) => Preparation)
  @prop({ ref: () => Preparation, required: true })
  public preparation: Ref<Preparation>;

  @GqlField((_type) => Date)
  @prop({ type: Date, required: true })
  public finishDate: Date;
}
