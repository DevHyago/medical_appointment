export class CustomError extends Error{
  statusCode: number;
  name: string;

  constructor(message: string, statusCode = 500, name = "CustomError"){
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}