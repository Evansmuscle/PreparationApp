export class DBCannotConnectException extends Error {
  override message: string = "Cannot Connect To Database!";
  override name: string = "DBCannotConnectException";
}
