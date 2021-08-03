import { Request, Response, NextFunction } from 'express';

import dotenv from 'dotenv';
dotenv.config();

import { AppError } from '../../../shared/errors/AppError';

import { verify } from 'jsonwebtoken';

interface IPayload {
    id: string;
}

export default function auth(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if(!authToken) {
        throw new AppError('invalid token', 401)
    };

    const [, token] = authToken.split(' ');

    const { id } = verify(token, process.env.SECRET_JWT || '') as IPayload;

    req.user_id = id;

    return next();
}