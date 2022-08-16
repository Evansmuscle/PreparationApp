import { Field, InputType } from "type-graphql";

@InputType()
export class CreatePreparationInput {
  @Field((_type) => String)
  ownerId: string;

  @Field((_type) => String)
  title: string;

  @Field((_type) => String)
  description: string;

  @Field((_type) => Date)
  finishDate: Date;
}
