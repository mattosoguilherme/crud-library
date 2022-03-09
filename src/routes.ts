import { Router } from "express";
import BookController from "./controllers/BookController";

const routes = Router();

routes.get("/library", BookController.library);
routes.post("/library", BookController.register);
routes.patch("/library/:id", BookController.update);
routes.delete("/library/:id", BookController.remove);
routes.get("/library/:id", BookController.findUnique)

export default routes;
