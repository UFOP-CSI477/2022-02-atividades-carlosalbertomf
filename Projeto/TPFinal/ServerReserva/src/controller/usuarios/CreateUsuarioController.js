import { prisma } from "../../database/client.js";

export class CreateUsuarioController{

    async handle(request,response)
    {
        const {
            id, 
            nome,
            email,
            is_admin
        } = request.body;

        const usuario = await prisma.usuario.create({
            data: {
                id, 
                nome,
                email,
                is_admin,
                created_at: new Date(),
                updated_at: new Date()
            }
        });

        console.log(usuario);
        return response.json(usuario);
    }

}

