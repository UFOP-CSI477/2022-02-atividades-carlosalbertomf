import { prisma } from "../../databse/client.js";


export class DeleteDistribuicoesController{

    async handle(request,response){

        const { id } = request.body;

        try{

            const distribuicoes = await prisma.distribuicoes.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(distribuicoes);
        } catch(error) {
             
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `[Delete Distribuições] - Impossível excluir pois o id: ${id} não existe!`
                 });
            }
        }

    }
}