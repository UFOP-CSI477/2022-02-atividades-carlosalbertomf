import { prisma } from "../../databse/client.js";


export class DeleteDoacoesController{

    async handle(request,response){

        const { id } = request.body;

        try{

            const doacoes = await prisma.doacoes.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(doacoes);
        } catch(error) {
             
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `[Delete Doações] - Impossível excluir pois o id: ${id} não existe!`
                 });
            }
        }

    }
}