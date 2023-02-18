import { randomUUID } from "crypto";

type IUser = {
   name: string;
   password: string;
   username: string;
}

export class User{
   name: string;
   password: string;
   username: string;
   id: string;
   isAdmin: boolean;

   private constructor(props: IUser){
      this.name = props.name;
      this.password = props.password;
      this.username = props.username;
      this.isAdmin = false;
      this.id = randomUUID();
   }

   static create(props: IUser){
      const user = new User(props);
      return user;
   }

}