import { prisma } from "../../databse/client.js"

export class GetAllEstadoController { //export diretamente da classe ao invés de exportar no final 

    async handle(request,response)
    {
        const estados = await prisma.estado.findMany(); //findMany = select *
        return response.json(estados);
    }
}

