import { prisma } from "../../databse/client.js"

export class GetAllUnidadeController { 

    async handle(request,response)
    {
        const unidades = await prisma.unidade.findMany();
        return response.json(unidades);
    }
}
