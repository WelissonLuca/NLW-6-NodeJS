import { Router } from "express";
import { CreateUserController } from "../controller/CreateUserController";

const UserRouter = Router();

const createUserController = new CreateUserController();

UserRouter.post("/users", createUserController.handle);

export { UserRouter };
