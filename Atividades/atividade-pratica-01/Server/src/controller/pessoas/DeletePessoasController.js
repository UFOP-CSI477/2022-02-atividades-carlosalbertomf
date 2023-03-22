import { prisma } from "../../databse/client.js";


export class DeletePessoaController{

    async handle(request,response){

        const { id } = request.body;

        try{

            const pessoa = await prisma.pessoa.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(pessoa);
        } catch(error) {
             
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `[Delete Pessoa] - Impossível excluir pois o id: ${id} não existe!`
                 });
            }
        }

    }
}