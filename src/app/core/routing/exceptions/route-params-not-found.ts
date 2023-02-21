export class RouteParamsNotFound extends Error {
  constructor(message = 'Route params not found.') {
    super(message);
  }
}
