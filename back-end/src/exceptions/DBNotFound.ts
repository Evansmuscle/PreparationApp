export class DBNotFoundException extends Error {
  override message: string = "Mongo Database URI has not been found!";
  override name: string = "DBNotFoundException";
}
