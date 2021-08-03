import { 
    Router,
    Request,
    Response
} from "express";

const index = Router();

index.get('/', (req: Request, res: Response) => {
    res.json({
        name: 'Psychometrika API',
        version: '1.0'
    });
});

export { index };