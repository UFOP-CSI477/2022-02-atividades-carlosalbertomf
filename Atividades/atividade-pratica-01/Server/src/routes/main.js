import { response, Router} from 'express';//objeto que não é default tem que ser colocado entre chaves

//import { GetAllEstadoController } from '../controller/estados/GetAllEstadoController.js';

const mainRouter = Router();

//const getAllEstadoController = new GetAllEstadoController();

//.send envia uma mensagem pura para a tela, podendo ser entre tags de HTML
/*mainRouter.get('/',(request,response) => {
    response.status(401).send("<h1>Unauthorized!</h1>");
});*/

mainRouter.get('/',(request,response) => {
    response.status(401).json({
        message:"Unauthorized!"
    });
});

//mainRouter.get('/estados', getAllEstadoController.handle);

mainRouter.get('/admin',(request,response) => {
    response.json({

        message:"API Server is running!"

    });
});

//export default mainRouter; //exemplo de importacao default
export { mainRouter };