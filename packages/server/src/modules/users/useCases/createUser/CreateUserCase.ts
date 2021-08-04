import IUser from "../../dtos/IUser.dto";
import { User } from "../../schema/User.schema";

import { hash } from 'bcryptjs';

import { AppError } from '../../../../shared/errors/AppError';

class CreateUserCase {
    async execute({
        email,
        password,
        select_class
    }: IUser) {
        if(!email || !password){
            throw new AppError('Invalid e-mail or password', 400);
        };

        if(!select_class){
            throw new AppError('invalid select_class');
        };

        const userAlreadyExists = await User.findOne({ email });

        if(userAlreadyExists){
            throw new AppError('user already exists', 400);
        };

        const password_hash = await hash(password, 8);

        const user = await User.create({ email, password: password_hash, class: String(select_class) });

        if(!user){
            throw new AppError('An error was occurred', 500);
        };

        return {
            message: "User created successfully",
            email: user.email
        };
    };
};

export { CreateUserCase };