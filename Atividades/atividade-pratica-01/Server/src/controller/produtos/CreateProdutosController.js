import { response } from "express";
import { prisma } from "../../databse/client.js";


export class CreateProdutosController{

    async handle(request,response)
    {
        const {id, etiqueta, doacao_id, validade} = request.body;

        const produto = await prisma.produto.create({
            data: {
                id,
                etiqueta,
                doacao_id,
                validade,
                created_at: new Date(),
                updated_at: new Date()
            }
        }); 

        console.log(produto);
        return response.json(produto);
    }

}

