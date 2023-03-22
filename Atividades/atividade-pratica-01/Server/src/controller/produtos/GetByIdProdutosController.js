import { prisma } from '../../databse/client.js';

export class GetByIdProdutosController {
    async handle(request, response)
    {
        const {id} = request.params;

        const produtos = await prisma.produto.findUnique({
            where: 
            {
                id: parseInt(id)
            }
        });

        return response.json(produtos);
    }

    
}