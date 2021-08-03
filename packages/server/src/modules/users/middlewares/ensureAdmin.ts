import { Request, Response, NextFunction } from 'express';

import { AppError } from '../../../shared/errors/AppError';
import { User } from '../schema/User.schema';

export async function ensureAdmin(
    req: Request,
    res: Response,
    next: NextFunction
){
    const _id = req.user_id;

    const user = await User.findById(_id);

    if(user?.admin){
        return next();
    };

    throw new AppError('Forbidden page', 403)
};