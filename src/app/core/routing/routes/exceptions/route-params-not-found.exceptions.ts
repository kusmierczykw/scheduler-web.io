export class RouteParamsNotFoundExceptions extends Error {
  constructor(message = 'Route params not found.') {
    super(message);
  }
}
