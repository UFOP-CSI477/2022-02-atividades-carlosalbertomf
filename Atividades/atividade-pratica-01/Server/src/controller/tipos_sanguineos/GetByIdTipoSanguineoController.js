import { prisma } from '../../databse/client.js';

export class GetByIdTipoSanguineoController {
    async handle(request, response)
    {
        const {id} = request.params;

        const tipoSanguineo = await prisma.tipoSanguineo.findUnique({
            where: 
            {
                id: parseInt(id)
            }
        });

        return response.json(tipoSanguineo);
    }

    
}