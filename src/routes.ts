import { Router } from "express";
import BookController from "./controllers/BookController";

const routes = Router();

routes.get("/library", BookController.library);
routes.post("/library", BookController.register)

export default routes;
