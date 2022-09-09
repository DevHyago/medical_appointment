import UserRepository from "../../repositories/user.repository";
import User from '../../entities/user.entity'

type UserRequest = {
   name: string;
   username: string;
   password: string;
}

class CreateUserCase{
   async execute(data: UserRequest){
      const userRepository = UserRepository.getInstance();
      const user = User.create(data);

      if(!data.username || !data.password){
         throw new Error('Username/password is required.');
      }

      const existsUser = await userRepository.findByUsername(data.username);
      if(existsUser){
         throw new Error('Username already exists');
      }

      const userCreated = await userRepository.save(user);
      return userCreated;
   }
}

export default CreateUserCase;