import { Router } from "express";
import { CreateUnidadeController } from "../controller/unidades/CreateUnidadeController.js";
import { DeleteUnidadeController } from "../controller/unidades/DeleteUnidadeController.js";
import { GetAllUnidadeController } from "../controller/unidades/GetAllUnidadeController.js";
import { GetByIdUnidadeController } from "../controller/unidades/GetByIdUnidadeController.js";
import { UpdateUnidadeController } from "../controller/unidades/UpdateUnidadeController.js";


const unidadeRouter = Router();

const getAllUnidadeController = new GetAllUnidadeController();
const getByIdUnidadeController =  new GetByIdUnidadeController();
const createUnidadeController = new CreateUnidadeController();
const updateUnidadeController = new UpdateUnidadeController();
const deleteUnidadeController = new DeleteUnidadeController();

unidadeRouter.get('/unidades', getAllUnidadeController.handle);
unidadeRouter.get('/unidades/:id', getByIdUnidadeController.handle);
//post
unidadeRouter.post('/unidades', createUnidadeController.handle);
//put
unidadeRouter.put('/unidades', updateUnidadeController.handle);
//delete
unidadeRouter.delete('/unidades',deleteUnidadeController.handle);


export{unidadeRouter};