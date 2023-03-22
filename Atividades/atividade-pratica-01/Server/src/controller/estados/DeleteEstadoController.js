 import { prisma } from "../../databse/client.js";


export class DeleteEstadoController{

    async handle(request,response){

        const { id } = request.body;

        try{

            const estado = await prisma.estado.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(estado);
        } catch(error) {
             
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `[Delete Estado] - Impossível excluir pois o id: ${id}  não existe!`
                 });
            }
        }

    }
}