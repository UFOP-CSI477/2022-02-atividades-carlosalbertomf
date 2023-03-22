import { prisma } from "../../databse/client.js"

export class GetAllDoacoesController { 

    async handle(request,response)
    {
        const doacoes = await prisma.doacoes.findMany(); 
        return response.json(doacoes);
    }
}
