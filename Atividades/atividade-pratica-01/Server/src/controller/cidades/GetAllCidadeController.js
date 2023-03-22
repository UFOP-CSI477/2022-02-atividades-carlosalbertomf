import { prisma } from "../../databse/client.js"

export class GetAllCidadeController { //export diretamente da classe ao invés de exportar no final 

    async handle(request,response)
    {
        const cidades = await prisma.cidade.findMany({
            include:{
                estado: true
            }
        }); //findMany = select *
        return response.json(cidades);
    }
}
