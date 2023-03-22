import { response } from "express";
import { prisma } from "../../databse/client.js";


export class CreateUnidadeController{

    async handle(request,response)
    {
        const {id, nome, numero, complemento, cidade_id} = request.body;
         

        const unidades = await prisma.unidade.create({
            data: {
                id,
                nome, 
                numero,
                complemento,
                cidade_id,
                created_at: new Date(),
                updated_at: new Date()
            }
        });

        console.log(unidades);
        return response.json(unidades);
    }

}

