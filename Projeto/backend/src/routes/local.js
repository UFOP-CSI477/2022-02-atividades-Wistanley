import { Router } from 'express';

import { CreateLocalController } from '../controller/locais/CreateLocalController.js';
import { GetAllLocalController } from '../controller/locais/GetAllLocalController.js';
import { GetByIdLocalController } from '../controller/locais/GetByIdLocalController.js';
import { UpdateLocalController } from '../controller/locais/UpdateLocalController.js';
import { DeleteLocalController } from '../controller/locais/DeleteLocalController.js';

const localRouter = Router();

// Cria local
const createLocalController = new CreateLocalController();
localRouter.post('/locais', createLocalController.handle);

// Recupera todos
const getAllLocalController = new GetAllLocalController();
localRouter.get('/locais', getAllLocalController.handle);

// Recupera 1 pelo ID
const getByIdLocalController = new GetByIdLocalController();
localRouter.get('/locais/:id', getByIdLocalController.handle);

// Atualiza
const updateLocalController = new UpdateLocalController();
localRouter.put('/locais', updateLocalController.handle);

// Deleta
const deleteLocalController = new DeleteLocalController();
localRouter.delete('/locais', deleteLocalController.handle);

export { localRouter }