import { response } from "express";
import { prisma } from "../../databse/client.js";


export class CreateCidadeController{

    async handle(request,response)
    {
        const {nome, estado_id} = request.body;

        if(nome === "")
        {
            return response.status(400).json(
                {
                    message: "Nome da cidade não pode ser vazio. Favor informar o nome da cidade."
                }
            );
        }
         
        if(estado_id == null)
        {
            return response.status(400).json(
                {
                    message: "ID não pode ser null. Identifique o ID referente à tabela de Estados"
                }
            )
        }

        const cidade = await prisma.cidade.create({
            data: {
                nome: nome,
                estado_id: estado_id, //referente ao id da tabela de estados
                created_at: new Date(),
                updated_at: new Date()
            }
        });

        console.log(cidade);
        return response.json(cidade);
    }

}

