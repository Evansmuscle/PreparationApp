import { registerEnumType } from "type-graphql";

export enum Status {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
}

registerEnumType(Status, {
  name: "Status",
  description: "The status of the current Preparation or Preparation Todo",
});
