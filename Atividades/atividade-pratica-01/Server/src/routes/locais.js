import { Router } from "express";
import { GetAllLocaisController } from "../controller/locais_coleta/GetAllLocaisController.js";
import { GetByIdLocaisController } from "../controller/locais_coleta/GetByIdLocaisController.js";
import { CreateLocaisController } from "../controller/locais_coleta/CreateLocaisController.js";
import { UpdateLocaisController } from "../controller/locais_coleta/UpdateLocaisController.js";
import { DeleteLocaisController } from "../controller/locais_coleta/DeleteLocaisController.js";

const locaisRouter = Router();

const getAllLocaisController = new GetAllLocaisController();
const getByIdLocaisController = new GetByIdLocaisController();
const createLocaisController = new CreateLocaisController();
const updateLocaisController = new UpdateLocaisController();
const deleteLocaisController = new DeleteLocaisController();

locaisRouter.get('/locaisdecoleta', getAllLocaisController.handle);
locaisRouter.get('/locaisdecoleta/:id',getByIdLocaisController.handle);
//post
locaisRouter.post('/locaisdecoleta',createLocaisController.handle);
//put
locaisRouter.put('/locaisdecoleta',updateLocaisController.handle);
//delete
locaisRouter.delete('/locaisdecoleta',deleteLocaisController.handle);

export {locaisRouter}