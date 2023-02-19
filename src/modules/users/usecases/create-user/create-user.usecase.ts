import { User } from "../../entities/user.entity";
import { ParameterRequiredError } from "../../../../errors/parameter-required.error";
import { IUserRepository } from "../../repositories/user.repository";
import { CustomError } from "../../../../errors/custom.error";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";

type UserRequest = {
   name: string;
   username: string;
   password: string;
}

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordCrypto: IPasswordCrypto
  ) {}

  async execute(data: UserRequest) {
    if (!data.username || !data.password) {
      throw new ParameterRequiredError("Username/password is required.", 422);
    }

    const userAlreadyExists = await this.userRepository.findByUsername(data.username);
    if (userAlreadyExists) {
      throw new CustomError("Username already exists", 400, "USER_EXISTS_ERROR");
    }

    const user = User.create(data);
    user.password = await this.passwordCrypto.hash(data.password)

    const userCreated = await this.userRepository.save(user);
    return userCreated;
  }
}