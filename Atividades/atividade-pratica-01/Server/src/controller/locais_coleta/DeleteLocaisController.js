import { prisma } from "../../databse/client.js";


export class DeleteLocaisController{

    async handle(request,response){

        const { id } = request.body;

        try{

            const locais = await prisma.locaisColeta.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(locais);
        } catch(error) {
             
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `[Delete Locais de Coleta] - Impossível excluir pois o id: ${id} não existe!`
                 });
            }
        }

    }
}