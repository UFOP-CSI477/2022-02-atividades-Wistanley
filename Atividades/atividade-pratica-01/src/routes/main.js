import { Router } from 'express';

const mainRouter = Router();

mainRouter.get('/', (request, response) => {

    response.json({

        message: "Servidor rodando."

    });

});

export { mainRouter };