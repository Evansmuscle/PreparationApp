import { Field as GqlField, ObjectType as GqlObjectType } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";

// Enums
import { Status } from "../../enums";

@GqlObjectType()
export class PreparationTodo {
  @GqlField((_type) => String)
  @prop({ type: String })
  public title: string;

  @GqlField((_type) => String)
  @prop({ type: String })
  public description: string;

  @GqlField((_type) => Status)
  @prop({ enum: Status, default: Status.NOT_STARTED })
  public status: Status;

  @GqlField((_type) => Date)
  @prop({ type: Date })
  public finishDate: Date;
}

export const PreparationTodoModel = getModelForClass(PreparationTodo);
