export class UserNotFoundException extends Error {
  override message: string = "User Not Found!";
  override name: string = "UserNotFoundException";
}
