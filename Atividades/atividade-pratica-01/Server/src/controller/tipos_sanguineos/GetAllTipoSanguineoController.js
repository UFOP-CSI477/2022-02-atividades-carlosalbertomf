import { prisma } from "../../databse/client.js"

export class GetAllTipoSanguineoController { 

    async handle(request,response)
    {
        const tipoSanguineo = await prisma.tipoSanguineo.findMany(); 
        return response.json(tipoSanguineo);
    }
}
