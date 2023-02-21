export class RouteEntryNotFoundException extends Error {
  constructor(name: string) {
    super(`The route entry "${name}" not found.`);
  }
}
