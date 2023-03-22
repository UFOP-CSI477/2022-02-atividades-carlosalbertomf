import { prisma } from '../../databse/client.js';

export class GetByIdLocaisController {
    async handle(request, response)
    {
        const {id, cidade_id} = request.params;

        const locaisColeta = await prisma.locaisColeta.findUnique({

            where: 
            {
                id: parseInt (id),
                cidade_id
            }
        });

        return response.json(locaisColeta);
    }

    
}