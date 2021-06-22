import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
class CreateUserController {
	async handle(request: Request, response: Response) {
		const { name, email, admin } = request.body;

		const createUserUseCase = new CreateUserUseCase();

		const user = await createUserUseCase.execute({ name, email, admin });

		return response.status(201).json(user);
	}
}


export { CreateUserController };