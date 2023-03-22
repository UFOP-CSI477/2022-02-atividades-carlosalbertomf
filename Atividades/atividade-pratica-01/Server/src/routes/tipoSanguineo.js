import { Router } from "express";

import { GetAllTipoSanguineoController } from "../controller/tipos_sanguineos/GetAllTipoSanguineoController.js";
import { GetByIdTipoSanguineoController } from "../controller/tipos_sanguineos/GetByIdTipoSanguineoController.js";
import { CreateTipoSanguineoController } from "../controller/tipos_sanguineos/CreateTipoSanguineoController.js";
import { UpdateTipoSanguineoController } from "../controller/tipos_sanguineos/UpdateTipoSanguineoController.js";
import { DeleteTipoSanguineoController } from "../controller/tipos_sanguineos/DeleteTipoSanguineoController.js";

const tipoSanguineoRouter = Router();

const getAllTipoSanguineoController = new GetAllTipoSanguineoController();
const getByIdTipoSanguineoController = new GetByIdTipoSanguineoController();
const createTipoSanguineoController = new CreateTipoSanguineoController();
const updateTipoSanguineoController = new UpdateTipoSanguineoController();
const deleteTipoSanguineoController = new DeleteTipoSanguineoController();

tipoSanguineoRouter.get('/tiposanguineo',getAllTipoSanguineoController.handle);
tipoSanguineoRouter.get('/tiposanguineo/:id',getByIdTipoSanguineoController.handle);

//post
tipoSanguineoRouter.post('/tiposanguineo', createTipoSanguineoController.handle)

//put
tipoSanguineoRouter.put('/tiposanguineo', updateTipoSanguineoController.handle)
//delete
tipoSanguineoRouter.delete('/tiposanguineo',deleteTipoSanguineoController.handle);

export {tipoSanguineoRouter}