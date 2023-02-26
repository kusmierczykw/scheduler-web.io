export class ControlErrorMessageEntryNotFoundException extends Error {
  constructor(key: string) {
    super(`The control error message entry "${key}" not found.`);
  }
}
