import { User } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

type UserRequest = {
   name: string;
   username: string;
   password: string;
}

export class CreateUserUseCase{
   async execute(data: UserRequest){
      
      if(!data.username || !data.password){
         throw new Error("Username/password is required.");
      }

      const userRepository = UserRepository.getInstance();

      const userAlreadyExists = await userRepository.findByUsername(data.username);
      if(userAlreadyExists){
         throw new Error("Username already exists");
      } 
      
      const user = User.create(data);

      const userCreated = await userRepository.save(user);
      return userCreated;
   }
}