export class ControlReferenceNotFoundException extends Error {
  constructor(message = 'The reference to "FormControl" was not found.') {
    super(message);
  }
}
