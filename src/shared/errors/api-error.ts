export class ApiError extends Error {
  constructor(
    readonly message: string,
    public readonly statusCode: number,
  ) {
    super(message);
  }
}
