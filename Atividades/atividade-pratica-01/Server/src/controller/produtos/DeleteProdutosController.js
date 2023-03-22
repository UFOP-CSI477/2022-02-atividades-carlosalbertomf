import { prisma } from "../../databse/client.js";


export class DeleteProdutoController{

    async handle(request,response){

        const { id } = request.body;

        try{

            const produto = await prisma.produto.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(produto);
        } catch(error) {
             
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `[Delete Produto] - Impossível excluir pois o id: ${id} não existe!`
                 });
            }
        }

    }
}