import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user.usecase";

export class CreateUserController{
   async handle(request: Request, response: Response){

      const data = request.body;
      
      const useCase = new CreateUserUseCase();
      const result = await useCase.execute(data);

      return response.status(201).json(result);
   }
}