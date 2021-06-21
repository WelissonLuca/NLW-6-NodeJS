import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/User";

 
@EntityRepository(User)
class UsersRepositories extends Repository<User> {}


export { UsersRepositories };