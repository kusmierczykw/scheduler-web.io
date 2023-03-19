export class EmployeeTypeNotFoundException extends Error {
  constructor(messsage = 'Employee type not found.') {
    super(messsage);
  }
}
