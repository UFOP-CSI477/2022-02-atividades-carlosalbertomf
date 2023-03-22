import { response } from "express";
import { prisma } from "../../databse/client.js";


export class CreateEstadoController{

    async handle(request,response)
    {
        const {nome,sigla} = request.body;

        //TODO
        //validaçoes
        if(nome === "")
        {
            return response.status(400).json(
                {
                    message: "Dados incompletos. Informe o nome e a sigla."
                }
            );
        }
        //sanitizaçoes (remover caracter especial e etc)

        const estado = await prisma.estado.create({
            data: {
                nome, //funciona como o cemp no Gap033 (nome da coluna, valor retornado)
                sigla,
                created_at: new Date(),
                updated_at: new Date()
            }
        });

        console.log(estado);
        return response.json(estado);
    }

}

