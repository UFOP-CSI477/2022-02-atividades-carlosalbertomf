import { Router } from "express";
import { CreatePessoaController } from "../controller/pessoas/CreatePessoaController.js";
import { DeletePessoaController } from "../controller/pessoas/DeletePessoasController.js";
import { GetAllPessoaController } from "../controller/pessoas/GetAllPessoaController.js";
import { GetByIdPessoaController } from "../controller/pessoas/GetByIdPessoaController.js";
import { UpdatePessoaController } from "../controller/pessoas/UpdatePessoaController.js";

const pessoaRouter = Router();

const getAllPessoaController = new GetAllPessoaController();
const getByIdPessoaController = new GetByIdPessoaController();
const createPessoaController = new CreatePessoaController();
const updatePessoaController = new UpdatePessoaController();
const deletePessoaController = new DeletePessoaController();

pessoaRouter.get('/pessoas', getAllPessoaController.handle);
pessoaRouter.get('/pessoas/:id',getByIdPessoaController.handle);
//post
pessoaRouter.post('/pessoas', createPessoaController.handle);
//put
pessoaRouter.put('/pessoas', updatePessoaController.handle);
//delete
pessoaRouter.delete('/pessoas', deletePessoaController.handle);





export {pessoaRouter}