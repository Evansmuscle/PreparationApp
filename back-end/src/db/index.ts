// exports start
export * from "./options";
// exports end

import mongoose from "mongoose";

// Config
import Configuration from "../config";

// Exceptions
import { DBCannotConnectException } from "../exceptions";

export const connectToDb = () => {
  try {
    const uri = Configuration.MONGO_URI;

    mongoose.connect(uri, {}, () => {
      console.log("Connected to DB Successfully!");
    });
  } catch (err) {
    throw new DBCannotConnectException((err as Error).message);
  }
};
