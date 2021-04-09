import User, { UserInterface } from '../models/users'

export class UserService {
    constructor(){}
    async all(): Promise<Array<UserInterface>> {
        let result: Array<UserInterface> = await User.find();
        return result;
    }

    public async create(data: UserInterface) {
        const result = await User.create(data);
        return result;
    }
}