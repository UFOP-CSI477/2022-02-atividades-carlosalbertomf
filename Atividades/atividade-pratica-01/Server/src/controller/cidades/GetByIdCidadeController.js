import { prisma } from '../../databse/client.js';

export class GetByIdCidadeController {
    async handle(request, response)
    {
        const {id} = request.params;

        const cidade = await prisma.cidade.findUnique({

            //filtrando com where
            where: 
            {
                id: parseInt(id)
            }
        });

        return response.json(cidade);
    }

    
}