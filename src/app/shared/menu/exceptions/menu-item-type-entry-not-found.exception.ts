export class MenuItemTypeEntryNotFoundException extends Error {
  constructor(name: string) {
    super(`The entry for "${name}" not found.`);
  }
}
