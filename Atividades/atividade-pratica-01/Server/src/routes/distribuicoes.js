import { Router } from "express";

import { GetAllDistribuicoesController } from "../controller/distribuicoes/GetAllDistribuicoesController.js";
import { GetByIdDistribuicoesController } from "../controller/distribuicoes/GetByIdDistribuicoesController.js";
import { CreateDistribuicoesController} from "../controller/distribuicoes/CreateDistribuicoesController.js";
import { UpdateDistribuicoesController } from "../controller/distribuicoes/UpdateDistribuicoesController.js";
import { DeleteDistribuicoesController } from "../controller/distribuicoes/DeleteDistribuicoesController.js";

const distribuicoesRouter = Router();

const getAllDistribuicoesController = new GetAllDistribuicoesController();
const getByIdDistribuicoesController = new GetByIdDistribuicoesController();
const createDistribuicoesController = new CreateDistribuicoesController();
const updateDistribuicoesController = new UpdateDistribuicoesController();
const deleteDistribuicoesController = new DeleteDistribuicoesController();

distribuicoesRouter.get('/distribuicoes',getAllDistribuicoesController.handle);
distribuicoesRouter.get('/distribuicoes/:id', getByIdDistribuicoesController.handle);

//post
distribuicoesRouter.post('/distribuicoes', createDistribuicoesController.handle);

//put
distribuicoesRouter.put('/distribuicoes', updateDistribuicoesController.handle);

//delete
distribuicoesRouter.delete('/distribuicoes', deleteDistribuicoesController.handle);

export {distribuicoesRouter}