import { prisma } from '../../databse/client.js';

export class GetByIdUnidadeController {
    async handle(request, response)
    {
        const {id, cidade_id} = request.params;

        const unidades = await prisma.unidade.findUnique({

            where: 
            {
                id: parseInt (id),
                cidade_id
            }
        });

        return response.json(unidades);
    }

    
}