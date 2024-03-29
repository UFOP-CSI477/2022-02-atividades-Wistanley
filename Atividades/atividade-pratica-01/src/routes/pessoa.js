import { Router } from 'express';
import { CreatePessoaController } from '../controller/pessoas/CreatePessoaController.js';
import { GetAllPessoaController } from '../controller/pessoas/GetAllPessoaController.js';
import { GetByIdPessoaController } from '../controller/pessoas/GetByIdPessoaController.js';
import { UpdatePessoaController } from '../controller/pessoas/UpdatePessoaController.js';

import { DeletePessoaController } from '../controller/pessoas/DeletePessoaController.js';

const pessoaRouter = Router();

// Cria pessoa
const createPessoaController = new CreatePessoaController();
pessoaRouter.post('/pessoas', createPessoaController.handle);

// Recupera todas
const getAllPessoaController = new GetAllPessoaController();
pessoaRouter.get('/pessoas', getAllPessoaController.handle);

// Recupera 1 pelo ID
const getByIdPessoaController = new GetByIdPessoaController();
pessoaRouter.get('/pessoas/:id', getByIdPessoaController.handle);

// Atualiza
const updatePessoaController = new UpdatePessoaController();
pessoaRouter.put('/pessoas', updatePessoaController.handle);

// Deleta
const deletePessoaController = new DeletePessoaController();
pessoaRouter.delete('/pessoas', deletePessoaController.handle);

export { pessoaRouter }