import { response } from "express";
import { prisma } from "../../databse/client.js";


export class CreateDistribuicoesController{

    async handle(request,response)
    {
        const {id, produto_id, unidade_id, data} = request.body;

        const distribuicoes = await prisma.distribuicoes.create({
            data: {
                id,
                produto_id,
                unidade_id,
                data,
                created_at: new Date(),
                updated_at: new Date()
            }
        }); 

        console.log(distribuicoes);
        return response.json(distribuicoes);
    }

}

