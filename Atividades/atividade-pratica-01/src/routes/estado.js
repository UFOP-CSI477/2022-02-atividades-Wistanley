import { Router } from "express";

import { GetAllEstadoController } from "../controller/estados/GetAllEstadoController.js";

import { CreateEstadoController } from "../controller/estados/CreateEstadoController.js";

import { GetByIdEstadoController } from "../controller/estados/GetByIdEstadoController.js";
import { UpdateEstadoController } from "../controller/estados/UpdateEstadoController.js";
import { DeleteEstadoController } from "../controller/estados/DeleteEstadoController.js";


const estadoRouter = Router();

// Recupera todos
const getAllEstadoController = new GetAllEstadoController();
estadoRouter.get('/estados', getAllEstadoController.handle);

// Cria estado
const createEstadoController = new CreateEstadoController();
estadoRouter.post('/estados', createEstadoController.handle);

// Recupera 1 pelo ID
const getByIdEstadoController = new GetByIdEstadoController();
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

// Atualiza
const updateEstadoController = new UpdateEstadoController();
estadoRouter.put('/estados', updateEstadoController.handle);

// Deleta
const deleteEstadoController = new DeleteEstadoController();
estadoRouter.delete('/estados', deleteEstadoController.handle);


export { estadoRouter }