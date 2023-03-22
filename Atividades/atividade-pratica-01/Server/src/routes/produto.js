import { Router } from "express";

import { GetAllProdutosController } from "../controller/produtos/GetAllProdutosController.js";
import { GetByIdProdutosController } from "../controller/produtos/GetByIdProdutosController.js";
import { CreateProdutosController } from "../controller/produtos/CreateProdutosController.js";
import { UpdateProdutoController } from "../controller/produtos/UpdateProdutoController.js";
import { DeleteProdutoController } from "../controller/produtos/DeleteProdutosController.js";

const produtoRouter = Router();

const getAllProdutosController = new GetAllProdutosController();
const getByIdProdutosController = new GetByIdProdutosController();
const createProdutosController = new CreateProdutosController();
const updateProdutoController = new UpdateProdutoController();
const deleteProdutoController = new DeleteProdutoController();

produtoRouter.get('/produtos',getAllProdutosController.handle);
produtoRouter.get('/produtos/:id',getByIdProdutosController.handle);

//post
produtoRouter.post('/produtos', createProdutosController.handle)

//put
produtoRouter.put('/produtos', updateProdutoController.handle)

//delete
produtoRouter.delete('/produtos',deleteProdutoController.handle);

export {produtoRouter}