import { Router } from "express";
import { createUserController } from "../modules/users/usecases/create-user";

const userRouter = Router();


userRouter.post("/users", async (request, response) => await createUserController.handle(request, response));

export { userRouter }