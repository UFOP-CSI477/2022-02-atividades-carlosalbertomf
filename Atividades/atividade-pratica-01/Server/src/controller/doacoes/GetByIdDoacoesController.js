import { prisma } from '../../databse/client.js';

export class GetByIdDoacoesController {
    async handle(request, response)
    {
        const {id} = request.params;

        const doacoes = await prisma.doacoes.findUnique({

            //filtrando com where
            where: 
            {
                id: parseInt(id)
            }
        });

        return response.json(doacoes);
    }

    
}