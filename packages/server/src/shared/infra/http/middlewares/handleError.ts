import { 
    Request,
    Response,
    NextFunction
} from 'express';

import { app } from '../app';

import { AppError } from '../../../errors/AppError';

export function HandleError() {
    app.use((
        err: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        if(err instanceof AppError){
            return res.status(err.statusCode).send({
                status: err.statusCode,
                message: err.message
            });
        };

        return res.status(500).send({
            status: 500,
            message: `Internal server error`
        });
    });
};