import { prisma } from "../../databse/client.js"

export class GetAllDistribuicoesController { 

    async handle(request,response)
    {
        const distribuicoes = await prisma.distribuicoes.findMany(); 
        return response.json(distribuicoes);
    }
}
