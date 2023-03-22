import { Router } from "express";

import { GetAllDoacoesController } from "../controller/doacoes/GetAllDoacoesController.js";
import { GetByIdDoacoesController } from "../controller/doacoes/GetByIdDoacoesController.js";
import { CreateDoacoesController } from "../controller/doacoes/CreateDoacoesController.js";
import { UpdateDoacoesController } from "../controller/doacoes/UpdateDoacoesController.js";
import { DeleteDoacoesController } from "../controller/doacoes/DeleteDoacoesController.js";

const doacoesRouter = Router();

const getAllDoacoesController = new GetAllDoacoesController();
const getByIdDoacoesController = new GetByIdDoacoesController();
const createDoacoesController = new CreateDoacoesController();
const updateDoacoesController = new UpdateDoacoesController();
const deleteDoacoesController = new DeleteDoacoesController();

doacoesRouter.get('/doacoes', getAllDoacoesController.handle);
doacoesRouter.get('/doacoes/:id',getByIdDoacoesController.handle);

//post - create
doacoesRouter.post('/doacoes',createDoacoesController.handle);

//put
doacoesRouter.put('/doacoes',updateDoacoesController.handle);

//delete
doacoesRouter.delete('/doacoes',deleteDoacoesController.handle);


export {doacoesRouter}

