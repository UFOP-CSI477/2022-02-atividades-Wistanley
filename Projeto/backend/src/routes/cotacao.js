import { Router } from 'express';
import { CreateDoacaoController } from '../controller/doacoes/CreateDoacaoController.js';
import { DeleteDoacaoController } from '../controller/doacoes/DeleteDoacaoController.js';
import { GetAllDoacaoController } from '../controller/doacoes/GetAllDoacaoController.js';
import { GetByIdDoacaoController } from '../controller/doacoes/GetByIdDoacaoController.js';
import { UpdateDoacaoController } from '../controller/doacoes/UpdateDoacaoController.js';

const doacaoRouter = Router();

// Cria doação
const createDoacaoController = new CreateDoacaoController();
doacaoRouter.post('/doacoes', createDoacaoController.handle);

// Recupera todas
const getAllDoacaoController = new GetAllDoacaoController();
doacaoRouter.get('/doacoes', getAllDoacaoController.handle);

// Recupera 1 pelo ID
const getByIdDoacaoController = new GetByIdDoacaoController();
doacaoRouter.get('/doacoes/:id', getByIdDoacaoController.handle);

// Atualiza
const updateDoacaoController = new UpdateDoacaoController();
doacaoRouter.put('/doacoes', updateDoacaoController.handle);

// Deleta
const deleteDoacaoController = new DeleteDoacaoController();
doacaoRouter.delete('/doacoes', deleteDoacaoController.handle);

export { doacaoRouter }