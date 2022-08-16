export class JwtSecretNotFoundException extends Error {
  override message: string = "Jwt Secret Not Found!";
  override name: string = "JwtSecretNotFoundException";
}
