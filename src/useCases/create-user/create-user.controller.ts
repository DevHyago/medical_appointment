import { Request, Response } from 'express';
import CreateUserCase from './create-user.usecase';

class CreateUserController{
   async handle(req: Request, res: Response){
      const data = req.body;
      const useCase = new CreateUserCase();
      const result = await useCase.execute(data);

      return res.json(result);
   }
}

export default CreateUserController;