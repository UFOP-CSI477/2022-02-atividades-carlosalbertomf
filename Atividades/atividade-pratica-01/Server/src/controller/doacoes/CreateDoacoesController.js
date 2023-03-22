import { response } from "express";
import { prisma } from "../../databse/client.js";


export class CreateDoacoesController{

    async handle(request,response)
    {
        const {id, pessoa_id, local_id, data} = request.body;

        const doacao = await prisma.doacoes.create({
            data: {
                id,
                pessoa_id,
                local_id,
                data,
                created_at: new Date(),
                updated_at: new Date()
            }
        }); 

        console.log(doacao);
        return response.json(doacao);
    }

}

