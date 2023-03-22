import { prisma } from '../../databse/client.js';

export class GetByIdEstadoController {
    async handle(request, response)
    {
        // /estados(id)
        // /estados/1
        const {id} = request.params;

        const estado = await prisma.estado.findUnique({

            //filtrando com where
            where: 
            {
                id: parseInt (id)
            }
        });
        

        return response.json(estado);
    }

    
}