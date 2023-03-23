import { prisma } from "../../databse/client.js"

export class GetAllDoacoesController { 

    async handle(request,response)
    {
        const doacoes = await prisma.doacoes.findMany({
            include: {
                pessoa: true,
                locais_coleta: true

            }
        }); 
        return response.json(doacoes);
    }
}
