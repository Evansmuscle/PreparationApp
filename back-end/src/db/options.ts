import { IModelOptions } from "@typegoose/typegoose/lib/types";

export const modelOptions: IModelOptions = {
  schemaOptions: {
    timestamps: true,
  },
  options: {
    runSyncIndexes: true,
  },
};
