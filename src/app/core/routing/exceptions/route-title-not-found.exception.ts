export class RouteTitleNotFoundException extends Error {
  constructor(name: string) {
    super(`The route title "${name}" not found.`);
  }
}
