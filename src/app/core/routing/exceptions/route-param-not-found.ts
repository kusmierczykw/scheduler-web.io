export class RouteParamNotFound extends Error {
  constructor(name: string) {
    super(`The route param "${name}" not found.`);
  }
}
