import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import auth from '../../../../config/auth';

import * as dotenv from 'dotenv';
dotenv.config();

import { AppError } from '../../../../shared/errors/AppError';

import { User, } from '../../schema/User.schema';
import IUser from '../../dtos/IUser.dto';

class AuthenticateUserCase {
  async execute({email, password}: IUser) {
    const user = await User.findOne({
        email
    });

    if(!user){
        throw new AppError('Email/Password incorrect!');
    };

    const passowrdMatch = await compare(password, user.password);

    if(!passowrdMatch){
        throw new AppError('Email/Password incorrect!');
    };

    return {
        token: jwt.sign({ id: user._id }, auth.secret, {
          expiresIn: auth.expiresIn,
        }),
        user: user.email,
        class: user.class
      };
  };
};

export { AuthenticateUserCase };