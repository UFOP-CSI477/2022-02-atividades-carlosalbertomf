import { prisma } from '../../databse/client.js';

export class GetByIdDistribuicoesController {
    async handle(request, response)
    {
        const {id} = request.params;

        const distribuicoes = await prisma.distribuicoes.findUnique({
            where: 
            {
                id: parseInt(id)
            }
        });

        return response.json(distribuicoes);
    }

    
}