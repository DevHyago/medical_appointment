import express from "express";
import { userRouter } from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(userRouter);

app.get("/", (request, response) => {
   return response.send("<h1>Show de Bola!!</h1>");
});

app.listen(3000, () => console.log("Server Started on port 3000"));