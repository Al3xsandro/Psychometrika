import { 
    Router,
    Request,
    Response
} from "express";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.json({
        name: 'Psychometrika API',
        version: '1.0'
    });
});

export default routes;