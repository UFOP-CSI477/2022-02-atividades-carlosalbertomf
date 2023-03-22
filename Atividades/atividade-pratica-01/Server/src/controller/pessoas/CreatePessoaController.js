import { response } from "express";
import { prisma } from "../../databse/client.js";


export class CreatePessoaController{

    async handle(request,response)
    {
        const {id, nome, rua, numero, complemento, documento, cidade_id, tipo_id} = request.body;

        const pessoa = await prisma.pessoa.create({
            data: {
                id, 
                nome, 
                rua, 
                numero, 
                complemento, 
                documento, 
                cidade_id, 
                tipo_id,
                created_at: new Date(),
                updated_at: new Date()
            }
        }); 

        console.log(pessoa);
        return response.json(pessoa);
    }

}

