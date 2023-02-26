export class Confirmation {
  constructor(
    readonly title: string,
    readonly message: string,
    readonly acceptLabel: string,
    readonly rejectLabel: string,
    readonly accept: () => void,
    readonly reject: () => void
  ) {}
}
