import { prisma } from "../../databse/client.js"

export class GetAllPessoaController { 

    async handle(request,response)
    {
        const pessoas = await prisma.pessoa.findMany(); 
        return response.json(pessoas);
    }
}

