import { response } from "express";
import { prisma } from "../../databse/client.js";


export class CreateTipoSanguineoController{

    async handle(request,response)
    {
        const {id, tipo, fator} = request.body;

        const tipoSanguineo = await prisma.tipoSanguineo.create({
            data: {
                id,
                tipo,
                fator,
                created_at: new Date(),
                updated_at: new Date()
            }
        }); 

        console.log(tipoSanguineo);
        return response.json(tipoSanguineo);
    }

}

