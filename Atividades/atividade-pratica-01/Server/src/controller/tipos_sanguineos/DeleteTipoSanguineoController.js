import { prisma } from "../../databse/client.js";


export class DeleteTipoSanguineoController{

    async handle(request,response){

        const { id } = request.body;

        try{

            const tipoSanguineo = await prisma.tipoSanguineo.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(tipoSanguineo);
        } catch(error) {
             
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `[Delete Tipo Sanguíneo] - Impossível excluir pois o id: ${id} não existe!`
                 });
            }
        }

    }
}