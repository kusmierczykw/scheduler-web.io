export class IconEntryNotFoundException extends Error {
  constructor(name: string) {
    super(`The icon "${name}" not found.`);
  }
}
