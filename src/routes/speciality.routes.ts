import { Router } from "express";
import { createSpecialityController } from "../modules/speciality/usecases/create-speciality";

const specialityRouter = Router();

specialityRouter.post("/specialitities", async (request, response) => await createSpecialityController.handle(request, response));

export { specialityRouter }