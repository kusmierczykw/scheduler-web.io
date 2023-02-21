export class RequireMethodCallException extends Error {
  constructor(method: string) {
    super(`The method "${method}" must be called.`);
  }
}
