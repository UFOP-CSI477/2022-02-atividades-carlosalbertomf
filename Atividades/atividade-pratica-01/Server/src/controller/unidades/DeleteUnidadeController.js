import { prisma } from "../../databse/client.js";


export class DeleteUnidadeController{

    async handle(request,response){

        const { id } = request.body;

        try{

            const unidade = await prisma.unidade.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(unidade);
        } catch(error) {
             
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `[Delete Unidade] - Impossível excluir pois o id: ${id} não existe!`
                 });
            }
        }

    }
}