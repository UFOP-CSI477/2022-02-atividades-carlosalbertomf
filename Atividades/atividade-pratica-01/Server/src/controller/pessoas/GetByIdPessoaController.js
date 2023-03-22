import { prisma } from '../../databse/client.js';

export class GetByIdPessoaController {
    async handle(request, response)
    {
        const {id} = request.params;

        const pessoa = await prisma.pessoa.findUnique({

            //filtrando com where
            where: 
            {
                id: parseInt (id)
            }
        });

        return response.json(pessoa);
    }

    
}