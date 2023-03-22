import { response } from "express";
import { prisma } from "../../databse/client.js";


export class CreateLocaisController{

    async handle(request,response)
    {
        const {id, nome, rua, numero, complemento, cidade_id} = request.body;

        if(nome === "")
        {
            return response.status(400).json(
                {
                    message: "Nome da cidade não pode ser vazio. Favor informar o nome da cidade."
                }
            );
        }
         
        if(cidade_id == null)
        {
            return response.status(400).json(
                {
                    message: "ID não pode ser null. Identifique o ID referente à tabela de Cidade"
                }
            )
        }

        const locaisColeta = await prisma.locaisColeta.create({
            data: {
                
                id, 
                nome, 
                rua, 
                numero, 
                complemento, 
                cidade_id,
                created_at: new Date(),
                updated_at: new Date()
            }
        });

        console.log(locaisColeta);
        return response.json(locaisColeta);
    }

}

