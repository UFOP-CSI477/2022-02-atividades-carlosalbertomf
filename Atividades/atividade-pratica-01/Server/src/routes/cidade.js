import { Router } from "express";
import { GetAllCidadeController } from "../controller/cidades/GetAllCidadeController.js";
import { GetByIdCidadeController } from "../controller/cidades/GetByIdCidadeController.js";
import { CreateCidadeController } from "../controller/cidades/CreateCidadeController.js";
import { UpdateCidadeController } from "../controller/cidades/UpdateCidadeController.js";
import { DeleteCidadeController } from "../controller/cidades/DeleteCidadeController.js";

const cidadeRouter = Router();


const getAllCidadeController = new GetAllCidadeController();
const getByIdCidadeController = new GetByIdCidadeController();
const createCidadeController = new CreateCidadeController();
const updateCidadeController = new UpdateCidadeController();
const deleteCidadeController = new DeleteCidadeController();

cidadeRouter.get('/cidades', getAllCidadeController.handle);
cidadeRouter.get('/cidades/:id', getByIdCidadeController.handle);

//post
cidadeRouter.post('/cidades', createCidadeController.handle);

//put
cidadeRouter.put('/cidades', updateCidadeController.handle);

//Delete
cidadeRouter.delete('/cidades', deleteCidadeController.handle);


export {cidadeRouter}

