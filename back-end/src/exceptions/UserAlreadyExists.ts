export class UserAlreadyExistsException extends Error {
  override message: string = "User with that email already exists!";
  override name: string = "UserAlreadyExistsException";
}
