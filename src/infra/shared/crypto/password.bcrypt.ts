import bcrypt from "bcryptjs";
import { IPasswordCrypto } from "./password.crypto";

export class PasswordBCryot implements IPasswordCrypto{
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 8);
  }
}