import { prisma } from "../../databse/client.js"

export class GetAllLocaisController { 

    async handle(request,response)
    {
        const locaisColeta = await prisma.locaisColeta.findMany({
            include: {
                cidade: true
            }
        });
        return response.json(locaisColeta);
    }
}
