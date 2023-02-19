import { Request, Response } from "express";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";
import { logger } from "../../../../utils/logger";
import { IUserRepository } from "../../repositories/user.repository";
import { CreateUserUseCase } from "./create-user.usecase";

export class CreateUserController {

  constructor(
    private userRepository: IUserRepository,
    private passwordCrypto: IPasswordCrypto
  ){}

  async handle(request: Request, response: Response) {
    try {
      const data = request.body;

      const useCase = new CreateUserUseCase(this.userRepository, this.passwordCrypto);
      const result = await useCase.execute(data);

      return response.status(201).json(result);
      
    } catch (error: any) {
      logger.error(error.stack);
      console.log(error);
      return response.status(error.statusCode).json({
        error: error.message
      });
    }
  }
}
