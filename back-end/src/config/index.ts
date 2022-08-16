import dotenv from "dotenv";

// Exceptions
import { DBNotFoundException, JwtSecretNotFoundException } from "../exceptions";

dotenv.config();

export default abstract class Configuration {
  public static get PORT() {
    if (process.env["PORT"]) {
      return process.env["PORT"];
    }

    return 3000;
  }

  public static get MONGO_URI() {
    if (process.env["MONGO_URI"]) {
      return process.env["MONGO_URI"];
    }

    throw new DBNotFoundException();
  }

  public static get JWT_SECRET() {
    if (process.env["JWT_SECRET"]) {
      return process.env["JWT_SECRET"];
    }

    throw new JwtSecretNotFoundException();
  }

  public static get ENVIRONMENT() {
    if (process.env["ENVIRONMENT"]) {
      return process.env["ENVIRONMENT"];
    }

    return "production";
  }
}
