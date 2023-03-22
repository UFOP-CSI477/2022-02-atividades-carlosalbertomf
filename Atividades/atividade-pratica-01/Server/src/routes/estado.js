import { Router } from "express";
import { GetAllEstadoController } from "../controller/estados/GetAllEstadoController.js";
import { CreateEstadoController } from "../controller/estados/CreateEstadoController.js";
import { GetByIdEstadoController } from "../controller/estados/GetByIdEstadoController.js";
import { UpdateEstadoController } from "../controller/estados/UpdateEstadoController.js";
import { DeleteEstadoController } from "../controller/estados/DeleteEstadoController.js";

const estadoRouter = Router();//instancia do Router

//get all
const getAllEstadoController = new GetAllEstadoController(); //instancia da classe GetAll...
estadoRouter.get('/estados', getAllEstadoController.handle);

//create POST
const createEstadoController = new CreateEstadoController(); //instancia da classe CreateEstado...
estadoRouter.post('/estados', createEstadoController.handle);

//GetByID
const getByIdEstadoController = new GetByIdEstadoController();
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

//Update - put
const updateEstadoController = new UpdateEstadoController();
estadoRouter.put('/estados', updateEstadoController.handle);

//Delete
const deleteEstadoController = new DeleteEstadoController();
estadoRouter.delete('/estados', deleteEstadoController.handle);

//Export
export {estadoRouter}